package com.joy.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.JoinColumn;

import java.time.LocalDateTime;
import java.time.LocalDate;

@Entity
public class PostItLabel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long labelId;

	@ManyToOne
	@JoinColumn(name="user_Id")
	private Usr user;

	private String labelName;

	private LocalDate todoDate;

	private boolean done;

	private LocalDateTime insTime;

	private LocalDateTime updTime;

	public PostItLabel() {}

	public PostItLabel(Usr usr, String labelName, LocalDate todoDate, boolean done) {
		this.user = usr;
		this.labelName = labelName;
		this.todoDate = todoDate;
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

	public Long getLabelId() {
		return labelId;
	}

	public Usr getUser() {
		return user;
	}

	public void setUser(Usr user) {
		this.user = user;
	}

	public String getLabelName() {
		return labelName;
	}

	public void setLabelName(String labelName) {
		this.labelName = labelName;
	}

	public LocalDate getTodoDate() {
		return todoDate;
	}

	public void setTodoDate(LocalDate todoDate) {
		this.todoDate = todoDate;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
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
