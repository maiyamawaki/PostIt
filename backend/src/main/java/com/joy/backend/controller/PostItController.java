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

import com.joy.backend.dto.PostItDto;

@RestController
@RequestMapping("/postit")
public class PostItController {
	
	private PostItService postService;

	public PostItController(PostItService postService) {
		this.postService = postService;
	}

	@GetMapping
	public List<PostItDto> getAllPostItByUpdTime(HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.getAllPostItByUserIdAndUpdTime(userId);
	}

	@GetMapping("/done")
	public List<PostItDto> getAllDonePostItByUpdTime(HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.getAllDonePostItByUserIdAndUpdTime(userId);
	}

	@PostMapping
	public List<PostItDto> createPostIt(@RequestBody PostItDto postItDto,
																			HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.createPostIt(postItDto, userId);
	}

	@PutMapping("/{postId}")
	public List<PostItDto> updatePostIt(@PathVariable Long postId,
																			@RequestBody PostItDto postItDto, 
																			HttpSession session) {
		Long userId = getUserIdBySession(session);
		postItDto.setPostId(postId);
		return postService.updatePostIt(postItDto, userId);
	}

	@PutMapping("/{postId}/done")
	public List<PostItDto> updatePostItAsDone(@PathVariable Long postId, 
																						 HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.updatePosItAsDone(postId, userId);
	}

	@PatchMapping("/{postId}")
	public List<PostItDto> markPostItAsDelete(@PathVariable Long postId, 
																						HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.markPostIdAsDeleted(postId, userId);
	}

	@DeleteMapping("/{postId}")
	public List<PostItDto> deletePostId(@PathVariable Long postId, HttpSession session) {
		Long userId = getUserIdBySession(session);
		return postService.deletePostIt(postId, userId);
	} 

	private Long getUserIdBySession(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		return userId;
	}
}
