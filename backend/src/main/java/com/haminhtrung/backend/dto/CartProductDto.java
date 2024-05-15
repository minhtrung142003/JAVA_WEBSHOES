package com.haminhtrung.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartProductDto {
    private Long cartId;
    private Integer quantity;
    private ProductDTO productDTO;
}
