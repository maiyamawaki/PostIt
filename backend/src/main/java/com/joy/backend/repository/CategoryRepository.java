package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joy.backend.entity.Category;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	public List<Category> findAllByUser_UserIdAndDelFlgFalseOrderByUpdTimeDesc(Long userId);

	public Category findByCategoryIdAndUser_UserId(Long categoryId, Long userId);
	
}
