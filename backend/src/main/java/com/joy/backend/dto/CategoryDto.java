package com.joy.backend.dto;

import java.time.LocalDateTime;

public class CategoryDto {
	private Long categoryId;

	private String categoryName;

	private boolean delFlg;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public CategoryDto() {}

	public CategoryDto(Long categoryId, String categoryName, boolean delFlg, LocalDateTime insTime, LocalDateTime updTime) {
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.delFlg = delFlg;
		this.insTime = insTime;
		this.updTime = updTime;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public boolean isDelFlg() {
		return delFlg;
	}

	public void setDelFlg(boolean delFlg) {
		this.delFlg = delFlg;
	}

	public LocalDateTime getInsTime() {
		return insTime;
	}

	public void setInsTime(LocalDateTime insTime) {
		this.insTime = insTime;
	}

	public LocalDateTime getUpdTime() {
		return updTime;
	}

	public void setUpdTime(LocalDateTime updTime) {
		this.updTime = updTime;
	}
	
}
