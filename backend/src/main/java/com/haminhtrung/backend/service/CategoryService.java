package com.haminhtrung.backend.service;

import com.haminhtrung.backend.entity.Category;
import java.util.List;
import java.util.UUID;

public interface CategoryService {
    public Category createCategory(Category category);

    public Category getCategoryById(Long categoryId);

    public List<Category> getAllCategories();

    List<Category> getRootCategories();

    List<Category> getCategoriesByParentId(Long parentId);

    public Category updateCategory(Category category);

    public void deleteCategory(Long categoryId);
}
