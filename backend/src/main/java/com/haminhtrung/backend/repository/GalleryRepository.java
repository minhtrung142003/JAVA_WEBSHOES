package com.haminhtrung.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.haminhtrung.backend.entity.Gallery;
import jakarta.transaction.Transactional;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
    List<Gallery> findByProductId(Long productId);

    // method delete galleries có product_id tương ứng
    @Modifying
    @Transactional
    @Query("DELETE FROM Gallery g WHERE g.product.id = :productId")
    void deleteByProductId(@Param("productId") Long productId);

}
