package com.haminhtrung.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.haminhtrung.backend.dto.CartProductDto;
import com.haminhtrung.backend.entity.Cart;
import com.haminhtrung.backend.service.CartService;
@RestController
@RequestMapping("api/carts")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class CartController {
    @Autowired
    private CartService cartService;

    // get all carts
    @GetMapping
    public ResponseEntity<List<Cart>> getAllCarts() {
        List<Cart> carts = cartService.getAllCarts();
        return ResponseEntity.ok(carts);
    }

    // get carts by id
    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable("id") Long cartId) {
        Cart cart = cartService.getCartById(cartId);
        if (cart != null) {
            return ResponseEntity.ok(cart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Cart> addCart(@RequestBody Cart cart) {
        Cart addedCart = cartService.addCart(cart);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCart);
    }

    // Get all products in cart by staff account ID
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<CartProductDto>> getAllProductsInCartByUserId(
            @PathVariable("userId") Long userId) {
        return ResponseEntity.ok(cartService.getAllProductsInCartByUserId(userId));
    }

    // api update quantity
    @PutMapping("/{userId}/products/{productId}")
    public ResponseEntity<String> updateQuantity(
            @PathVariable Long userId,
            @PathVariable Long productId,
            @RequestParam Integer newQuantity) {

        cartService.updateQuantity(userId, productId, newQuantity);
        return ResponseEntity.status(HttpStatus.OK).body("Quantity updated successfully.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable("id") Long cartId, @RequestBody Cart updatedCart) {
        Cart cart = cartService.updateCart(cartId, updatedCart);
        if (cart != null) {
            return ResponseEntity.ok(cart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

     // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable("id") Long cartId) {
        cartService.deleteCart(cartId);
        return ResponseEntity.noContent().build();
    }

}
