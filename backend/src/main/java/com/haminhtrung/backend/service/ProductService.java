package com.haminhtrung.backend.service;

import com.haminhtrung.backend.entity.Product;
import java.util.List;

public interface ProductService {
    Product createProduct(Product product);

    Product getProductById(Long productId);

    List<Product> getProductsByCategoryName(String categoryName);

    List<Product> getProductsByTagName(String tagName);

    List<Product> getAllProducts();

    Product updateProduct(Product product);

    void deleteProduct(Long productId);

    List<Product> searchProducts(String searchTerm); // search

}
