package com.joy.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

@Entity
public class PostIt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long postId;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private Usr user;
	
	private String postItTitle;

	private String postItContents;

	private String postItCategory;

	private boolean done;

	private boolean delFlg;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public PostIt() {}

	public PostIt(Usr user, String postItTitle, String postItContents, String postItCategory, boolean done) {
		this.user = user;
		this.postItTitle = postItTitle;
		this.postItContents = postItContents;
		this.postItCategory = postItCategory;
		this.done = done;
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

	public Long getPostId() {
		return postId;
	}

	public String getPostItTitle() {
		return postItTitle;
	}

	public Usr getUser() {
		return user;
	}

	public void setUser(Usr user) {
		this.user = user;
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
