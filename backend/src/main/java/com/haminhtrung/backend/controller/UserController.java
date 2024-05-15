package com.haminhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.haminhtrung.backend.service.UserService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.entity.User;
// import com.haminhtrung.backend.repository.UserRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class UserController {
    private UserService userService;

    // create user REST API
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = userService.createUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/users/1
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User User = userService.getUserById(userId);
        return new ResponseEntity<>(User, HttpStatus.OK);
    } 

    // get all user REST API
     // http://localhost:8080/api/users
    @GetMapping
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = userService.getAllUsers();
         HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + users.size() +"/" + users.size());
        return ResponseEntity.ok().headers(headers).body(users);
    }

    // update User REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/users/1
    public ResponseEntity<User> updateUser(@PathVariable("id") Long userId, @RequestBody User User) {
        User.setId(userId);
        User updateUser = userService.updateUser(User);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }
    // delete user REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }


    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDto userDto) {
        User registeredUser = userService.registerUser(userDto);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser(@RequestBody UserDto userDto) {
        UserDto loggedInUser = userService.loginUser(userDto);
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser); // Trả về thông tin của người dùng đã đăng nhập
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }
    
    
}
