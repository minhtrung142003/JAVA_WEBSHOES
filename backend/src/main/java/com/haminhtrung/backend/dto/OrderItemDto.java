package com.haminhtrung.backend.dto;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Gallery;
import com.haminhtrung.backend.entity.Tag;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDto {
    private Long productId;
    private Long orderId;
    private String title;
    private int price;
    private int discount;
    private int quantity;
    private String description;
    private String shortDescription;
    private Set<Category> categories = new HashSet<>();
    private Set<Tag> tags = new HashSet<>();
    private Set<Gallery> galleries  = new HashSet<>();
    private String colorName;
    private String sizeName;
}
