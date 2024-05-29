package com.haminhtrung.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.haminhtrung.backend.service.CategoryService;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.haminhtrung.backend.entity.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
// import com.haminhtrung.backend.repository.CategoryRepository;

@RestController
@RequestMapping("api/categories")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class CategoryController {
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // get all category
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    // get all danh muc cha
    @GetMapping("/root")
    public ResponseEntity<List<Category>> getRootCategories() {
        List<Category> rootCategories = categoryService.getRootCategories();
        if (rootCategories != null && !rootCategories.isEmpty()) {
            return new ResponseEntity<>(rootCategories, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // get all danh muc con tu cha
    @GetMapping("/parent/{parentId}")
    public ResponseEntity<List<Category>> getCategoriesByParentId(@PathVariable("parentId") Long parentId) {
        List<Category> categories = categoryService.getCategoriesByParentId(parentId);
        if (categories != null && !categories.isEmpty()) {
            return new ResponseEntity<>(categories, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // get theo id
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long id) {
        Category category = categoryService.getCategoryById(id);
        if (category != null) {
            return new ResponseEntity<>(category, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // post categories
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category savedCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }


    // update Category REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Categories/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId,
            @RequestBody Category Category) {
        Category.setId(categoryId);
        Category updateCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updateCategory, HttpStatus.OK);
    }

    // delete category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}
