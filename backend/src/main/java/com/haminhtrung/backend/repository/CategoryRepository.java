package com.haminhtrung.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.haminhtrung.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByCategoryName(String categoryName);

    @Query("SELECT c FROM Category c WHERE c.parentId IS NULL")
    List<Category> findRootCategories();

    @Query("SELECT c FROM Category c WHERE c.parentId.id = :parentId")
    List<Category> findByParentId(@Param("parentId") Long parentId);
}
