package com.pets.pets.repository;

import com.pets.pets.controller.CategoryController;
import com.pets.pets.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends
JpaRepository<Category, Integer> {

    CategoryController saveAll(CategoryController category);
}
