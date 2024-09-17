package com.pets.pets.controller;
import com.pets.pets.model.Category;
import com.pets.pets.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
@Autowired
private CategoryRepository categoryRepository;
@GetMapping
public List<Category> getAllCategorys() {
return categoryRepository.findAll();
}
@PostMapping
public CategoryController createCategory(@RequestBody
CategoryController category) {
return categoryRepository.saveAll(category);
}
}
