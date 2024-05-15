package com.haminhtrung.backend.service;

import java.util.List;
import java.util.UUID;

import com.haminhtrung.backend.dto.CartProductDto;
import com.haminhtrung.backend.entity.Cart;

public interface CartService {
    void updateQuantity(Long userId, Long productId, Integer newQuantity);

    Cart addCart(Cart cart);

    List<Cart> getAllCarts();

    List<CartProductDto> getAllCartsByUserId(Long userId);

    Cart getCartById(Long cartId);

    Cart updateCart(Long cartId, Cart updatedCart);
    void deleteCart(Long cartId);

    List<CartProductDto> getAllProductsInCartByUserId(Long userId);



}
