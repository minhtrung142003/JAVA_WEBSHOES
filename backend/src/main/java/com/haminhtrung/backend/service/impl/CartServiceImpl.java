package com.haminhtrung.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
    public List<CartProductDto> getAllCartsByUserId(Long UserId) {
        List<Cart> carts = cartRepository.findAllByUserId(UserId);
        List<CartProductDto> cartProductDtos = new ArrayList<>();

        for (Cart cart : carts) {
            CartProductDto cartProductDto = new CartProductDto();
            cartProductDto.setCartId(cart.getId()); // Set cartId for each cart product DTO
            // cartProductDto.setProductId(cart.getProductId());
            cartProductDto.setQuantity(cart.getQuantity());
            cartProductDtos.add(cartProductDto);
        }

        return cartProductDtos;
    }

    @Override
    // hàm trả về list cart
    public List<CartProductDto> getAllProductsInCartByUserId(Long userId) {
    List<Cart> carts = cartRepository.findAllByUserId(userId);
    List<CartProductDto> cartProductDtos = new ArrayList<>();
    for (Cart cart : carts) {
    cartProductDtos.add(cartProductDTO(cart));
    }
    return cartProductDtos;
    }
    CartProductDto cartProductDTO(Cart cart) {
    CartProductDto cartProductDto = new CartProductDto();
    cartProductDto.setCartId(cart.getId());
    cartProductDto.setQuantity(cart.getQuantity());
    cartProductDto.setProductDTO(dtoMapper.getProductDTO(productService.getProductById(cart.getProductId())));
    return cartProductDto;
    }

    // hàm add cart
    @Override
    public Cart addCart(Cart cart) {
        // Tìm tất cả các giỏ hàng có cùng productId và userId
        List<Cart> existingCarts = cartRepository.findAllByProductIdAndUserId(cart.getProductId(),
                cart.getUserId());

        if (!existingCarts.isEmpty()) {
            // Nếu có giỏ hàng đã tồn tại, cập nhật quantity của giỏ hàng đầu tiên được tìm
            // thấy
            Cart existingCart = existingCarts.get(0);
            existingCart.setQuantity(existingCart.getQuantity() + cart.getQuantity());
            return cartRepository.save(existingCart);
        } else {
            // Nếu không có giỏ hàng nào tồn tại, tạo giỏ hàng mới
            return cartRepository.save(cart);
        }
    }

    // hàm update quantiy
    @Override
    public void updateQuantity(Long UserId, Long productId, Integer newQuantity) {
        List<Cart> carts = cartRepository.findByUserIdAndProductId(UserId, productId);
        if (!carts.isEmpty()) {
            Cart cart = carts.get(0);
            cart.setQuantity(newQuantity);
            cartRepository.save(cart);
        }
    }

    // hàm update cart
    @Override
    public Cart updateCart(Long cartId, Cart updatedCart) {
        Cart existingCart = cartRepository.findById(cartId).orElse(null);

        if (existingCart != null) {
            // Cập nhật các trường khác của giỏ hàng nếu cần
            existingCart.setProductId(updatedCart.getProductId());
            existingCart.setQuantity(updatedCart.getQuantity());
            existingCart.setUserId(updatedCart.getUserId()); // Cập nhật userId thay vì
                                                             // user
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
