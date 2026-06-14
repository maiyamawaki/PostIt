package com.joy.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

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

	private Long getUserIdBySession(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		return userId;
	}

}
