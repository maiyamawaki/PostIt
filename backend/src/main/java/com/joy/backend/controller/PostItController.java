package com.joy.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

import com.joy.backend.service.PostItService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import com.joy.backend.dto.PostItDto;

@RestController
@RequestMapping("/postit/{labelId}")
public class PostItController {
	
	private PostItService postService;

	public PostItController(PostItService postService) {
		this.postService = postService;
	}
 
	@GetMapping
	public List<PostItDto> getAllPostItByUpdTime(HttpSession session, @PathVariable Long labelId) {
		Long userId = getUserIdBySession(session);
		return postService.getAllPostItByUserIdAndUpdTime(userId, labelId);
	}
	 
	@GetMapping("/{postId}")	
	public PostItDto getPostItByUserIdAndPostId(@PathVariable Long postId, HttpSession session, @PathVariable Long labelId) {
		Long userId = getUserIdBySession(session);
		return postService.findPostItByUserIdAndPostItId(postId, userId, labelId);
	}

	@GetMapping("/donePostIts")
	public List<PostItDto> getAllDonePostItByUpdTime(HttpSession session, @PathVariable Long labelId) {
		Long userId = getUserIdBySession(session);
		return postService.getAllDonePostItByUserIdAndUpdTime(userId, labelId);
	}

	@PostMapping
	public List<PostItDto> createPostIt(@Valid @RequestBody PostItDto postItDto, 
																			@PathVariable Long labelId,
																			HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.createPostIt(postItDto, userId, labelId);
	}

	@PutMapping("/{postId}")
	public List<PostItDto> updatePostIt(@Valid @PathVariable Long postId,
																			@PathVariable Long labelId,
																			@RequestBody PostItDto postItDto, 
																			HttpSession session) {
		Long userId = getUserIdBySession(session);
		postItDto.setPostId(postId);
		return postService.updatePostIt(postItDto, userId, labelId);
	}

	@PutMapping("/{postId}/done")
	public List<PostItDto> updatePostItAsDone(@Valid @PathVariable Long postId, 
																						@PathVariable Long labelId,
																						HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.updatePosItAsDone(postId, userId, labelId);
	}

	@PatchMapping("/{postId}")
	public List<PostItDto> markPostItAsDelete(@Valid @PathVariable Long postId, 
																						@PathVariable Long labelId,
																						HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.markPostIdAsDeleted(postId, userId, labelId);
	}

	@DeleteMapping("/{postId}")
	public List<PostItDto> deletePostId(@Valid @PathVariable Long postId, @PathVariable Long labelId, HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.deletePostIt(postId, userId, labelId);
	} 

	private Long getUserIdBySession(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		return userId;
	}
}
