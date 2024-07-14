package com.haminhtrung.backend.service.impl;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.haminhtrung.backend.repository.UserRepository;
import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.entity.User;
import com.haminhtrung.backend.exception.AppException;
import com.haminhtrung.backend.exception.ErrorCode;
import com.haminhtrung.backend.mapper.UserDtoMapper;
import com.haminhtrung.backend.service.UserService;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.Payload;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import java.util.logging.Level;
import java.util.regex.Matcher;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService {

    UserRepository userRepository;
    UserDtoMapper userDtoMapper;
    PasswordEncoder passwordEncoder;
    // Regex for validating email
    static final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
    static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);
    static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());
    // handle token
    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SIGNER_KEY;

    // get user by id
    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // get all user
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // add user
    @Override
    public User createUser(UserDto userDto) {
        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user = userDtoMapper.toUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        return userRepository.save(user);
    }

    // put user
    @Override
    public User updateUser(UserDto userDto) {
        User existingUser = userRepository.findById(userDto.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
       userDtoMapper.updateUser(existingUser, userDto);
        if (userDto.getPassword() != null && !userDto.getPassword().isEmpty()) {
            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
            String encodedPassword = passwordEncoder.encode(userDto.getPassword());
            existingUser.setPassword(encodedPassword);
        }
        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    // delete user
    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    // register user
    @Override
    public User registerUser(UserDto userDto) {
        if (!isEmailValid(userDto.getEmail())) {
            throw new IllegalArgumentException("Email không hợp lệ");
        }
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
        User newUser = new User(userDto.getFullname(), userDto.getEmail(), userDto.getPhone_number(),
                userDto.getAddress(), encodedPassword);
        return userRepository.save(newUser);
    }

    // validation email
    private boolean isEmailValid(String email) {
        Matcher matcher = EMAIL_PATTERN.matcher(email);
        return matcher.matches();
    }

    // login user
    @Override
    public UserDto loginUser(UserDto userDto) {
        User userInDb = userRepository.findByFullname(userDto.getFullname());
        if (userInDb != null) {
            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            if (passwordEncoder.matches(userDto.getPassword(), userInDb.getPassword())) {
                String token = generateToken(userDto.getFullname()); // Tạo mã JWT token
                UserDto loggedInUserDto = new UserDto(
                        userInDb.getId(),
                        userInDb.getFullname(),
                        userInDb.getEmail(),
                        userInDb.getPhone_number(),
                        userInDb.getAddress(),
                        userInDb.getPassword(),
                        token);
                return loggedInUserDto;
            }
        }
        return null;
    }

    // hàm handle token
    private String generateToken(String fullname) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(fullname)
                .issuer("haminhtrung.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()))
                .jwtID(UUID.randomUUID().toString())
                .claim("customClaim", "Custom")
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.log(Level.SEVERE, "Cannot create token", e);
            throw new RuntimeException(e);
        }
    }

}