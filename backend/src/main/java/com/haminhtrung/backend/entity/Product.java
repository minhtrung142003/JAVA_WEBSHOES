package com.haminhtrung.backend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;
    @Column(name = "title", length = 255)
    String title;
    @Column(name = "price", columnDefinition = "numeric")
    int price;
    @Column(name = "discount", columnDefinition = "numeric")
    int discount;
    @Column(name = "quantity")
    int quantity;
    @Column(name = "description", length = 255)
    String description;
    @Column(name = "short_description", length = 165)
    String shortDescription;
    @ManyToMany
    @JoinTable(name = "product_categories", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
    Set<Category> categories = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
    Set<Tag> tags = new HashSet<>();

    @OneToMany(mappedBy = "product")
    Set<Gallery> galleries = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "color_id")
    Color colors;

    @ManyToOne
    @JoinColumn(name = "size_id")
    Size sizes;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    Cart cart;

}
