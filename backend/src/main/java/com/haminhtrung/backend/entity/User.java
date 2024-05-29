package com.haminhtrung.backend.entity;

import java.sql.Date;
// import java.util.List;
// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String email;
    private String phone_number;
    private String address;
    private String password;
    private Date createdAt;

    public User(String fullname, String email, String phone_number, String address, String password) {
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.password = password;
        this.createdAt = new Date(System.currentTimeMillis()); // Khởi tạo ngày tạo là thời điểm hiện tại
    }

}

