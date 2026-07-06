package com.joy.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.joy.backend.dto.PostItLabelDto;
import com.joy.backend.service.PostItLabelService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/label")
public class PostItLabelController {

	private PostItLabelService postItLabelService;

	public PostItLabelController(PostItLabelService postItLabelService) {
		this.postItLabelService = postItLabelService;
	}

	@GetMapping
	public List<PostItLabelDto> getAllPostItLabelByUserIdAndUpdTime(HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postItLabelService.getAllPostItLabelByUserIdAndUpdTime(userId);
	}

	@PostMapping
	public List<PostItLabelDto> createPostItLabel(@Valid @RequestBody PostItLabelDto postItLabelDto, HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postItLabelService.createPostItLabel(postItLabelDto, userId);
	}

	@PostMapping("/{labelId}")
	public List<PostItLabelDto> updatePostItAsDone(@Valid @PathVariable Long labelId, HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postItLabelService.updatePostItLabelAsDone(labelId, userId);
	}


	private Long getUserIdBySession(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		return userId;
	}
}
