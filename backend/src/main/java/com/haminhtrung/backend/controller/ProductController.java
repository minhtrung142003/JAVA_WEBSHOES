package com.haminhtrung.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.haminhtrung.backend.dto.ProductDTO;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.service.ProductService;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class ProductController {
    @Autowired
    private ProductService productService;

    // search
    @GetMapping("/search")
    public List<ProductDTO> searchProducts(@RequestParam("search") String searchTerm) {
        List<Product> products = productService.searchProducts(searchTerm);
        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // get id product theo tag
    @GetMapping("/tag/{tagName}")
    public ResponseEntity<List<ProductDTO>> getProductsByTagName(@PathVariable("tagName") String tagName) {
        List<Product> products = productService.getProductsByTagName(tagName);
        return mapProductListToResponse(products);
    }

    // get id product theo category
    @GetMapping("/category/{categoryName}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategoryName(
            @PathVariable("categoryName") String categoryName) {
        List<Product> products = productService.getProductsByCategoryName(categoryName);
        return mapProductListToResponse(products);
    }

    // get id product
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") Long productId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            ProductDTO productDTO = convertToDTO(product);
            return ResponseEntity.ok(productDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // get all products
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return mapProductListToResponse(products);
    }

    // post product
    @PostMapping
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        Product addedProduct = productService.createProduct(product);
        ProductDTO addedProductDTO = convertToDTO(addedProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedProductDTO);
    }

    // put product
    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long productId, @RequestBody Product Product) {
        Product.setId(productId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // delete product
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }

    // change Entity sang DTO
    private ProductDTO convertToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        productDTO.setGalleries(product.getGalleries());
        productDTO.setColors(product.getColors());
        productDTO.setSizes(product.getSizes());
        return productDTO;
    }

    // change DTO sang Entity
    private Product convertToEntity(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        product.setGalleries(productDTO.getGalleries());
        product.setColors(productDTO.getColors()); 
        product.setSizes(productDTO.getSizes()); 
        return product;
    }

    // map all product sang ResponseEntity
    private ResponseEntity<List<ProductDTO>> mapProductListToResponse(List<Product> products) {
        if (products != null && !products.isEmpty()) {
            List<ProductDTO> productDTOs = products.stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
            return ResponseEntity.ok(productDTOs);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
