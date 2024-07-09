package com.haminhtrung.backend.dto;

import java.util.HashSet;
import java.util.Set;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Gallery;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.entity.Tag;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)

public class OrderItemDto {
    Long id;
    Long productId;
    Long orderId;
    String title;
    int price;
    int discount;
    int quantity;
    String description;
    String shortDescription;
    Set<Category> categories = new HashSet<>();
    Set<Tag> tags = new HashSet<>();
    Set<Gallery> galleries = new HashSet<>();
    String colorName;
    String sizeName;
    Product product;
}
