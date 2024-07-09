package com.haminhtrung.backend.dto;

import com.haminhtrung.backend.entity.Color;
import com.haminhtrung.backend.entity.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CartProductDto {
    Long cartId;
    Integer quantity;
    ProductDTO productDTO;
    Color color;
    Size size;
}
