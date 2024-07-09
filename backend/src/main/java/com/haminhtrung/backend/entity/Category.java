package com.haminhtrung.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Category {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY) // primary key
  @Column(name = "id")
  Long id;

  @ManyToOne
  @JoinColumn(name = "parent_id") // lam khoa ngoai cho categories
  Category parentId;

  @Column(name = "name")
  String categoryName;

  @Column(name = "category_description")
  String categoryDescription;

  @Column(name = "icon")
  String icon;

  @ManyToMany(mappedBy = "categories")
  @JsonIgnore
  List<Product> products;
}
