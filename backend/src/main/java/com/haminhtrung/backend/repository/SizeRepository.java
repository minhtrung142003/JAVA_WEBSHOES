package com.haminhtrung.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haminhtrung.backend.entity.Size;

public interface SizeRepository extends JpaRepository<Size, Long>{
      Optional<Size> findByName(String name);
}
