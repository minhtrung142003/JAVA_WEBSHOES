package com.haminhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;
import com.haminhtrung.backend.entity.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
     Optional<Cart> findById(Long id);

     List<Cart> findAllByProductIdAndUserIdAndColorIdAndSizeId(Long productId, String userId, Long colorId, Long sizeId);
     List<Cart> findByUserIdAndProductId(String userId, Long productId);

     List<Cart> findAllByUserId(String userId);

}
