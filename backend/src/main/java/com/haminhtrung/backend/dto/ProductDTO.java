package com.haminhtrung.backend.dto;

import java.util.HashSet;
import java.util.Set;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Color;
import com.haminhtrung.backend.entity.Gallery;
import com.haminhtrung.backend.entity.Size;
import com.haminhtrung.backend.entity.Tag;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductDTO {
    Long id;
    String title;
    int price;
    int discount;
    int quantity;
    String description;
    String shortDescription;
    Set<Category> categories = new HashSet<>();
    Set<Gallery> galleries = new HashSet<>();
    Set<Tag> tags = new HashSet<>();
    Color colors;
    Size sizes;
}
