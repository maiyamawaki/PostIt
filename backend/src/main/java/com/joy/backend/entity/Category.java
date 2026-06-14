package com.joy.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

public class Category {
	private Long categoryId;

	@ManyToOne
	@JoinColumn(name="user_id")
	private Usr user;

	private String categoryName;

	private boolean delFlg;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public Category() {} 

	public Category(Usr user, String categoryName, boolean delFlg) {
		this.user = user;
		this.categoryName = categoryName;
		this.delFlg = delFlg;
	}

	@PrePersist
	public void preTimeSet() {
		this.insTime = LocalDateTime.now();
		this.updTime = LocalDateTime.now();
	}

	@PreUpdate
	public void preUpdateTimeSet() {
		this.updTime = LocalDateTime.now();
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public Usr getUser() {
		return user;
	}

	public void setUser(Usr user) {
		this.user = user;
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
