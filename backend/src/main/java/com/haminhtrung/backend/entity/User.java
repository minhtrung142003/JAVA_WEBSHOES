package com.haminhtrung.backend.entity;

import java.sql.Date;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Size(min = 3, message = "USERNAME_INVALID")
    String username;
    String fullname;
    String email;
    String phone_number;
    String address;
    @Size(min = 8, message = "PASSWORD_ERROR")
    String password;
    Date createdAt;

    public User(String fullname, String email, String phone_number, String address, String password) {
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.password = password;
        this.createdAt = new Date(System.currentTimeMillis()); // khởi tạo ngày tạo là now
    }

}
