package com.haminhtrung.backend.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.haminhtrung.backend.service.UserService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.dto.request.ApiResponse;
import com.haminhtrung.backend.entity.User;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("api/users")
public class UserController {
    UserService userService;

    // get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = userService.getAllUsers();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + users.size() + "/" + users.size());
        return ResponseEntity.ok().headers(headers).body(users);
    }

    // get user by id
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User User = userService.getUserById(userId);
        return new ResponseEntity<>(User, HttpStatus.OK);
    }

    // post user
    @PostMapping
    public ApiResponse<User> createUser(@RequestBody @Valid UserDto userDto) {
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(userDto));
        return apiResponse;
    }

    // put user
    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long userId, @RequestBody User User) {
        User.setId(userId);
        User updateUser = userService.updateUser(User);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    // delete user
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    // register user
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDto userDto) {
        User registeredUser = userService.registerUser(userDto);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    // login user
    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser(@RequestBody UserDto userDto) {
        UserDto loggedInUser = userService.loginUser(userDto);
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
