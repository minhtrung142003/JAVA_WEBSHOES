package com.haminhtrung.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.haminhtrung.backend.repository.CategoryRepository;
import com.haminhtrung.backend.repository.GalleryRepository;
import com.haminhtrung.backend.repository.ProductRepository;
import com.haminhtrung.backend.repository.TagRepository;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.service.ProductService;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private TagRepository tagRepository;
    
    @Autowired
    private GalleryRepository galleryRepository;

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
            Collections.sort(products, Comparator.comparing(Product::getId).reversed());
            return products;
        }
        return Collections.emptyList();
    }

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

    // put product
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
        existingProduct.setColors(product.getColors());
        existingProduct.setSizes(product.getSizes());
        Product updateProduct = productRepository.save(existingProduct);
        return updateProduct;
    }

    // delete product
    @Override
    public void deleteProduct(Long productId) {
        galleryRepository.deleteByProductId(productId);
        productRepository.deleteById(productId);
    }

}