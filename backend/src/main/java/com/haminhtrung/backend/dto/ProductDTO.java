package com.haminhtrung.backend.dto;

import java.util.HashSet;
import java.util.Set;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.entity.Color;
import com.haminhtrung.backend.entity.Gallery;
import com.haminhtrung.backend.entity.Size;
import com.haminhtrung.backend.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String title;
    private int price;
    private int discount;
    private int quantity;
    private String description;
    private String shortDescription;
    private Set<Category> categories = new HashSet<>();
    private Set<Gallery> galleries = new HashSet<>();
    private Set<Tag> tags = new HashSet<>();
    private Color colors;
    private Size sizes;
}
