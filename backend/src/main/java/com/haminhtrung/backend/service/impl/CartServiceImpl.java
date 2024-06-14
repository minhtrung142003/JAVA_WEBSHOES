package com.haminhtrung.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.haminhtrung.backend.dto.CartProductDto;
import com.haminhtrung.backend.dto.mapper.ProductDtoMapper;
import com.haminhtrung.backend.entity.Cart;
import com.haminhtrung.backend.repository.CartRepository;
import com.haminhtrung.backend.service.CartService;
import com.haminhtrung.backend.service.ProductService;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductDtoMapper dtoMapper;

    // hàm get all cart
    @Override
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    // hàm get theo id cart
    @Override
    public Cart getCartById(Long cartId) {
        Optional<Cart> optionalCart = cartRepository.findById(cartId);
        return optionalCart.orElse(null);
    }

    // hàm get all cart theo id user
    @Override
    public List<CartProductDto> getAllCartsByUserId(String UserId) {
        List<Cart> carts = cartRepository.findAllByUserId(UserId);
        List<CartProductDto> cartProductDtos = new ArrayList<>();
        for (Cart cart : carts) {
            CartProductDto cartProductDto = new CartProductDto();
            cartProductDto.setCartId(cart.getId());
            cartProductDto.setQuantity(cart.getQuantity());
            cartProductDtos.add(cartProductDto);
        }
        return cartProductDtos;
    }

    // hàm trả về list cart
    @Override
    public List<CartProductDto> getAllProductsInCartByUserId(String userId) {
        List<Cart> carts = cartRepository.findAllByUserId(userId);
        List<CartProductDto> cartProductDtos = new ArrayList<>();
        for (Cart cart : carts) {
            cartProductDtos.add(cartProductDTO(cart));
        }
        return cartProductDtos;
    }
    // Hàm chuyển đổi thông tin từ Cart sang CartProductDto
    CartProductDto cartProductDTO(Cart cart) {
        CartProductDto cartProductDto = new CartProductDto();
        cartProductDto.setCartId(cart.getId());
        cartProductDto.setQuantity(cart.getQuantity());
        cartProductDto.setProductDTO(dtoMapper.getProductDTO(productService.getProductById(cart.getProductId())));
        cartProductDto.setColor(cart.getColor());
        cartProductDto.setSize(cart.getSize());
        return cartProductDto;
    }

    // hàm add cart
    @Override
    public Cart addCart(Cart cart) {
        List<Cart> existingCarts = cartRepository.findAllByProductIdAndUserIdAndColorIdAndSizeId(
                cart.getProductId(),
                cart.getUserId(),
                cart.getColor().getId(),
                cart.getSize().getId());
        if (!existingCarts.isEmpty()) {
            Cart existingCart = existingCarts.get(0);
            existingCart.setQuantity(existingCart.getQuantity() + cart.getQuantity());
            return cartRepository.save(existingCart);
        } else {
            return cartRepository.save(cart);
        }
    }

    // hàm update quantiy
    @Override
    public void updateQuantity(String UserId, Long productId, Integer newQuantity) {

        List<Cart> carts = cartRepository.findByUserIdAndProductId(UserId, productId);
        if (!carts.isEmpty()) {
            Cart cart = carts.get(0);
            cart.setQuantity(newQuantity);
            cartRepository.save(cart);
        }
    }

    // hàm put cart
    @Override
    public Cart updateCart(Long cartId, Cart updatedCart) {
        Cart existingCart = cartRepository.findById(cartId).orElse(null);
        if (existingCart != null) {
            existingCart.setProductId(updatedCart.getProductId());
            existingCart.setQuantity(updatedCart.getQuantity());
            existingCart.setColor(updatedCart.getColor());
            existingCart.setSize(updatedCart.getSize());
            existingCart.setUserId(updatedCart.getUserId());
            return cartRepository.save(existingCart);
        }
        return null;
    }

    // hàm delete
    @Override
    public void deleteCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }

}
