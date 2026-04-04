package com.joy.backend.dto;

import java.time.LocalDateTime;

public class PostItDto {
	private Long postId;

	private String postItTitle;

	private String postItContents;

	private boolean delFlg;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public PostItDto() {}

	public PostItDto(Long postId, String postItTitle, String postItContents, LocalDateTime insTime, LocalDateTime updTime) {
		this.postId = postId;
		this.postItTitle = postItTitle;
		this.postItContents = postItContents;
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
