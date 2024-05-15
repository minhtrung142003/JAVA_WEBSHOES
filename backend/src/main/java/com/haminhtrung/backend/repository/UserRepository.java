package com.haminhtrung.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.haminhtrung.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByFullname(String fullname);

}
