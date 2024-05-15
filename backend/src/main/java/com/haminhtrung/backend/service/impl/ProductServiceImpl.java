package com.haminhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.haminhtrung.backend.repository.CategoryRepository;
import com.haminhtrung.backend.repository.ProductRepository;
import com.haminhtrung.backend.repository.TagRepository;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.service.GalleryService;
import com.haminhtrung.backend.service.ProductService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    // @Autowired
    // private GalleryService galleryService;

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private TagRepository tagRepository;


    // search
    @Override
    public List<Product> searchProducts(String searchTerm) {
        return productRepository.findByTitleContaining(searchTerm);
    }


    // get product by tag name
    @Override
    public List<Product> getProductsByTagName(String tagName) {
        Tag tag = tagRepository.findByName(tagName);
        if (tag != null) {
            List<Product> products = tag.getProducts();
            // Sắp xếp danh sách sản phẩm theo id lớn hơn
            Collections.sort(products, Comparator.comparing(Product::getId).reversed());
            return products;
        }
        return Collections.emptyList();
    }
    
    // get product by category name
  
    @Override
    public List<Product> getProductsByCategoryName(String categoryName) {
        Category category = categoryRepository.findByCategoryName(categoryName);
        if (category != null) {
            List<Product> products = category.getProducts();
            // Sắp xếp danh sách sản phẩm theo id lớn hơn
            Collections.sort(products, Comparator.comparing(Product::getId).reversed());
            return products;
        }
        return Collections.emptyList();
    }
    // public List<Product> getProductsByCondition(String title, Long category) {
    //     if (title != null && category != null) {
    //         return productRepository.findByTitleAndCategoryId(title, category);
    //     } else if (title != null) {
    //         return productRepository.findByTitle(title);
    //     } else if (category != null) {
    //         return productRepository.findByCategoryId(category);
    //     } else {
    //         return new ArrayList<>(); // TRẢ VỀ DANH SÁCH trống nếu ko có điều kiện
    //     }
    // }

    // get product by id
    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    // post product
    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // get all products
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    // put  products
    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setPrice(product.getPrice());
        existingProduct.setTitle(product.getTitle());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setShortDescription(product.getShortDescription());
        existingProduct.setCategories(product.getCategories());
        existingProduct.setGalleries(product.getGalleries());
        existingProduct.setTags(product.getTags());

        Product updateProduct = productRepository.save(existingProduct);
        return updateProduct;
    }
    
    // delete product
    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    // public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
    //     PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
    //     return productRepository.findLatestProductsInCategory(categoryId, pageRequest);
    // }

    // @Override
    // public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable) {
    //     return productRepository.findProductsByCategoryId(categoryId, pageable);
    // }

}