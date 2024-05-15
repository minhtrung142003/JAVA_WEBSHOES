package com.haminhtrung.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.data.domain.Pageable;

import com.haminhtrung.backend.dto.ProductDTO;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.service.ProductService;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

// import com.haminhtrung.backend.repository.ProductRepository;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")

public class ProductController {

    @Autowired
    private ProductService productService;
    
    //search
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
    public ResponseEntity<List<ProductDTO>> getProductsByCategoryName(@PathVariable("categoryName") String categoryName) {
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
    // http://localhost:8080/api/Categories/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long productId, @RequestBody Product Product) {
        Product.setId(productId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // delete product
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

    // // product new
    // @GetMapping("/getlatest")
    // public ResponseEntity<List<Product>> getProductsNew(
    //         @RequestParam(name = "categoryid", required = false) Long category,
    //         @RequestParam(name = "pagesize", required = false, defaultValue = "5") int pagesize) {
    //     List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
    //     return ResponseEntity.ok(products);
    // }

    // Phương thức chuyển đổi từ Entity sang DTO
    private ProductDTO convertToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        productDTO.setGalleries(product.getGalleries());
        return productDTO;
    }

    // Phương thức chuyển đổi từ DTO sang Entity
    private Product convertToEntity(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        product.setGalleries(productDTO.getGalleries());
        return product;
    }

    // Phương thức chung để map danh sách sản phẩm sang ResponseEntity
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
