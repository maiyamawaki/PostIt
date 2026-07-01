package com.joy.backend.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public class PostItDto {
	private Long postId;

	@NotBlank(message = "PostIt title is required")
	private String postItTitle;

	@NotBlank(message = "PostIt contents is required")
	private String postItContents;

	@NotBlank(message = "PostIt category is required")
	private String postItCategory;

	private boolean done;

	private boolean delFlg;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public PostItDto() {}

	public PostItDto(Long postId, String postItTitle, String postItContents, String postItCategory, boolean done, LocalDateTime insTime, LocalDateTime updTime) {
		this.postId = postId;
		this.postItTitle = postItTitle;
		this.postItContents = postItContents;
		this.postItCategory = postItCategory;
		this.done = done;
		this.insTime = insTime;
		this.updTime = updTime;
	}

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}
	
	public String getPostItTitle() {
		return postItTitle;
	}

	public void setPostItTitle(String postItTitle) {
		this.postItTitle = postItTitle;
	}

	public String getPostItContents() {
		return postItContents;
	}

	public void setPostItContents(String postItContents) {
		this.postItContents = postItContents;
	}

	public String getPostItCategory() {
		return postItCategory;
	}	

	public void setPostItCategory(String postItCategory) {
		this.postItCategory = postItCategory;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
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
