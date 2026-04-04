package com.joy.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import com.joy.backend.service.PostItService;
import com.joy.backend.dto.PostItDto;


@RestController
@RequestMapping("/")
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

}
