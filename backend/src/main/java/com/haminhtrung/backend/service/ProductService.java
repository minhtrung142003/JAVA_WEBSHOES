package com.haminhtrung.backend.service;

import com.haminhtrung.backend.entity.Product;
import java.util.List;
import java.util.UUID;


// import org.springframework.data.jpa.repository.Query;
public interface ProductService {
    Product createProduct(Product product);

    Product getProductById(Long productId);

    List<Product> getProductsByCategoryName(String categoryName);

    List<Product> getProductsByTagName(String tagName);

    List<Product> getAllProducts();

    Product updateProduct(Product product);

    void deleteProduct(Long productId);

    List<Product> searchProducts(String searchTerm); // search
    // public List<Product> getProductsByCondition(String title, Long category);

    // public List<Product> getLatestProductsInCategory(Long categoryId, int
    // pageSize);

    // public Page<Product> getProductsByCategoryId(Long categoryId, Pageable
    // pageable);

    // @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId ORDER BY
    // p.created_at DESC")
    // List<Product> findLatestProductsInCategory(Long categoryId, Pageable
    // pageable);
}
