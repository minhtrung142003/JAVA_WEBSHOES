package com.haminhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import lombok.experimental.NonFinal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.haminhtrung.backend.repository.UserRepository;
import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.entity.User;
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
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import java.util.logging.Level;
import java.util.regex.Matcher;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    // Regex for validating email
    private static final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);

    private UserRepository userRepository;
    private static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());

    // handle token
    @NonFinal
    protected static final String SiGNER_KEY = "IQ8SMYaokz+WF9kVhs+AYr1MxM6YliKLvFR0nYV57221Gs9x+LuFzyicJfFvj76A";

    // get user by id
    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    // get all user
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // add user
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // put user
    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setFullname(user.getFullname());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setAddress(user.getAddress());
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
            String encodedPassword = passwordEncoder.encode(user.getPassword());
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
            jwsObject.sign(new MACSigner(SiGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.log(Level.SEVERE, "Cannot create token", e);
            throw new RuntimeException(e);
        }
    }

}