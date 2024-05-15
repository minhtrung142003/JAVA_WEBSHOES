package com.haminhtrung.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//  import java.util.Date;
import java.util.List;
import java.util.UUID;

// get và set dùng để tự động tạo các trường bằng lombok
@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Category {
  @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // day la 1 anotation chi dinh lam primary key
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
    
    @Column(name = "isHome")
    private int isHome;

    @ManyToMany(mappedBy = "categories")
    @JsonIgnore
    private List<Product> products;
}
