package com.haminhtrung.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String fullname;    
    private String email;
    private String phone_number;
    private String address;
    private String password;
    private String token;

    public UserDto(Long id, String fullname, String email, String phone_number, String address, String password, String token) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.password = password;
        this.token = token;

    }
   
   
}