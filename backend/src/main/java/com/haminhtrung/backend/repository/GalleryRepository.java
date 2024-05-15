package com.haminhtrung.backend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haminhtrung.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
        List<Gallery> findByProductId(Long productId);

}
