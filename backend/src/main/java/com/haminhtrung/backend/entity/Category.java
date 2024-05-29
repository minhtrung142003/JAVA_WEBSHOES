package com.haminhtrung.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Category {
  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // day la 1 anotation chi dinh lam primary key
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "parent_id") // chi dinh ten cua cot, lam khoa ngoai cho categories
    private Category parentId;
    @Column(name = "name")
    private String categoryName;

    @Column(name = "category_description")
    private String categoryDescription;

    @Column(name = "icon")
    private String icon;

    @ManyToMany(mappedBy = "categories")
    @JsonIgnore
    private List<Product> products;
}
