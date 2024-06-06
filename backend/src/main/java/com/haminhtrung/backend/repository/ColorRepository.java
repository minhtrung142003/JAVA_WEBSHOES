package com.haminhtrung.backend.repository;

import com.haminhtrung.backend.entity.Color;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends JpaRepository<Color, Long> {
    Optional<Color> findByName(String name);
}
