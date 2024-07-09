package com.haminhtrung.backend.service;

import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.entity.User;
import java.util.List;

public interface UserService {
  public User createUser(UserDto userDto);

  public User getUserById(Long UserId);

  public List<User> getAllUsers();

  public User updateUser(User User);

  public void deleteUser(Long UserId);

  User registerUser(UserDto userDto);

  UserDto loginUser(UserDto userDto);

}
