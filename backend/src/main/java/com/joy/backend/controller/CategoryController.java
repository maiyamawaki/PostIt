package com.joy.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import com.joy.backend.service.CategoryService;
import com.joy.backend.dto.CategoryDto;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	private CategoryService categoryService;

	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	@GetMapping
	public List<CategoryDto> getAllCategoryByUserId(HttpSession session) {
		Long userId = getUserIdBySession(session);
		return categoryService.getAllCategoryByUserIdAndUpdTime(userId);
	}

	@PostMapping
	public List<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto,HttpSession session) {
		Long userId = getUserIdBySession(session);
		return categoryService.createCategory(categoryDto, userId);
	}

	@DeleteMapping("/{categoryId}")
	public List<CategoryDto> deleteCategory(@PathVariable Long categoryId, HttpSession session) {
		Long userId = getUserIdBySession(session);
		return categoryService.deleteCategory(categoryId, userId);
	}
	
	private Long getUserIdBySession(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		return userId;
	}

}
