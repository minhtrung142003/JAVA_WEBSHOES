package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.service.CategoryService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.haminhtrung.backend.entity.Category;
import com.haminhtrung.backend.repository.CategoryRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // get all category
    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // get id category
    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCatgory = categoryRepository.findById(categoryId);
        return optionalCatgory.get();
    }

    // get all root category
    @Override
    public List<Category> getRootCategories() {
        return categoryRepository.findRootCategories();
    }

    // get all child category
    @Override
    public List<Category> getCategoriesByParentId(Long parentId) {
        return categoryRepository.findByParentId(parentId);
    }

    // post category 
    @Override
    public Category createCategory(Category category) {
        if (category.getId() != null) {
            category.setId(null);
        }
        return categoryRepository.save(category);
    }

    // put category
    @Override
    public Category updateCategory(Category category) {
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setCategoryName(category.getCategoryName());
        existingCategory.setCategoryDescription(category.getCategoryDescription());
        existingCategory.setIcon(category.getIcon());
        existingCategory.setParentId(category.getParentId());
        Category updatedCategory = categoryRepository.save(existingCategory);
        return updatedCategory;
    }

    // delete category
    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
