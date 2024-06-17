package com.haminhtrung.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "title", length = 255)
    private String title;
    @Column(name = "price", columnDefinition = "numeric")
    private int price;
    @Column(name = "discount", columnDefinition = "numeric")
    private int discount;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "short_description", length = 165)
    private String shortDescription;
    @ManyToMany
    @JoinTable(name = "product_categories", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<Tag> tags = new HashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<Gallery> galleries = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color colors;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size sizes;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

}
