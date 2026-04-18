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
import com.joy.backend.dto.PostItDto;

@RestController
@RequestMapping("/postit")
public class PostItController {
	
	private PostItService postService;

	public PostItController(PostItService postService) {
		this.postService = postService;
	}

	@GetMapping
	public List<PostItDto> getAllPostItByUpdTime() {
		return postService.getAllPostItByUpdTime();
	}

	@PostMapping
	public List<PostItDto> createPostIt(@RequestBody PostItDto postItDto) {
		return postService.createPostIt(postItDto);
	}

	@PutMapping("/{postId}")
	public List<PostItDto> updatePostIt(@PathVariable Long postId, @RequestBody PostItDto postItDto) {
		postItDto.setPostId(postId);
		return postService.updatePostIt(postItDto);
	}

	@PatchMapping("/{postId}")
	public List<PostItDto> markPostItAsDelete(@PathVariable Long postId) {
		return postService.markPostIdAsDeleted(postId);
	}

	@DeleteMapping("/{postId}")
	public List<PostItDto> deletePostId(@PathVariable Long postId) {
		return postService.deletePostIt(postId);
	} 

}
