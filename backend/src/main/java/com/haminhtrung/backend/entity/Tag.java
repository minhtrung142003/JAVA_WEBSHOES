package com.haminhtrung.backend.entity;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "tags")
public class Tag {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id")
  Long id;

  @Column(name = "tag_name")
  String name;

  @Column(name = "icon")
  String icon;

  @ManyToMany(mappedBy = "tags")
  @JsonIgnore
  List<Product> products;
}
