package com.joy.backend.service;

import org.springframework.stereotype.Service;

import com.joy.backend.repository.CategoryRepository;
import com.joy.backend.repository.UsrRepository;
import com.joy.backend.dto.CategoryDto;
import com.joy.backend.entity.Category;
import com.joy.backend.entity.Usr;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

	private CategoryRepository categoryRepo;
	private UsrRepository userRepo;

	public CategoryService(CategoryRepository categoryRepo, UsrRepository userRepo) {
		this.categoryRepo = categoryRepo;
		this.userRepo = userRepo;
	}

	private CategoryDto toDto(Category category) {
		CategoryDto dto = new CategoryDto(category.getCategoryId(),
																			category.getCategoryName(),
																			category.isDelFlg(),
																			category.getInsTime(),
																			category.getUpdTime());
		return dto;
	}

	public List<CategoryDto> getAllCategoryByUserIdAndUpdTime(Long userId) {
		List<CategoryDto> categoryList = categoryRepo.findAllByUser_UserIdAndDelFlgFalseOrderByUpdTimeDesc(userId).
																		stream()
																		.map(category->toDto(category))
																		.collect(Collectors.toList());
		return categoryList;
	}

	public List<CategoryDto> createCategory(CategoryDto categoryDto, Long userId) {
		Usr user = userRepo.findByUserId(userId);
		Category category = new Category(user,
																			categoryDto.getCategoryName(),
																			false);
		categoryRepo.save(category);
		return getAllCategoryByUserIdAndUpdTime(userId);
	}

	public List<CategoryDto> deleteCategory(Long categoryId, Long userId) {
		Category category = categoryRepo.findByCategoryIdAndUser_UserId(categoryId, userId);
		if(category != null) {
			category.setDelFlg(true);
			categoryRepo.save(category);
		}
		return getAllCategoryByUserIdAndUpdTime(userId);
	}
	
}
