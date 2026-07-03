package com.joy.backend.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PostItLabelDto {
	
	private Long labelId;

	@NotBlank(message = "Label name is required")
	private String labelName;

	@NotNull(message = "Label color is required")
	private LocalDate todoDate;

	private boolean done;

	private LocalDateTime insTime;

	private LocalDateTime updTime;
	
	public PostItLabelDto() {}

	public PostItLabelDto(Long labelId, String labelName, LocalDate todoDate, boolean done, LocalDateTime insTime, LocalDateTime updTime) {
		this.labelId = labelId;
		this.labelName = labelName;
		this.todoDate = todoDate;
		this.done = done;
		this.insTime = insTime;
		this.updTime = updTime;
	}

	public Long getLabelId() {
		return labelId;
	}

	public void setLabelId(Long labelId) {
		this.labelId = labelId;
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
