package com.haminhtrung.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.haminhtrung.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTitleContaining(String searchTerm);
    List<Product> findAll();
}