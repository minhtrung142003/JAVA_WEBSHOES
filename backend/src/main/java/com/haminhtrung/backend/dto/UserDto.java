package com.haminhtrung.backend.dto;

import java.sql.Date;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {
    Long id;
    String username;
    String fullname;
    String email;
    String phone_number;
    String address;
    String password;
    String token;
    Date createdAt;

    public UserDto(Long id, String fullname, String email, String phone_number, String address, String password,
            String token) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.password = password;
        this.token = token;
        this.createdAt = new Date(System.currentTimeMillis()); // khởi tạo ngày tạo là now

    }
}