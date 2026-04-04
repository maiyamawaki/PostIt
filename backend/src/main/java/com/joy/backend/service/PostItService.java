package com.joy.backend.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.joy.backend.repository.PostItRepository;
import com.joy.backend.entity.PostIt;
import com.joy.backend.dto.PostItDto;

@Service
public class PostItService {
	
	private PostItRepository postRepo;

	public PostItService(PostItRepository postRepo) {
		this.postRepo = postRepo;
	}

	private PostItDto toDto(PostIt postIt) {
		PostItDto dto = new PostItDto(postIt.getPostId(), 
																	postIt.getPostItTitle(), 
																	postIt.getPostItContents(), 
																	postIt.getInsTime(), 
																	postIt.getUpdTime());
		return dto;
	}

	private PostIt findPostItByPostItId(Long postId) {
		PostIt post = postRepo.findById(postId).orElseThrow(()->new RuntimeException("PostIt not found"));
		return post;
	}

	public List<PostItDto> getAllPostItByUpdTime() {
		List<PostItDto> postList = postRepo.findAllByDelFlgFalseOrderByUpdTimeDesc()
																		.stream()
																		.map(postit->toDto(postit))
																		.collect(Collectors.toList());
		return postList;
	}

	public List<PostItDto> createPostIt(PostItDto postItDto) {
		PostIt post = new PostIt(postItDto.getPostItTitle(), 
														postItDto.getPostItContents());
		postRepo.save(post);

		return getAllPostItByUpdTime();
	}

	public List<PostItDto> updatePostIt(PostItDto postItDto) {
		PostIt post = findPostItByPostItId(postItDto.getPostId());

		post.setPostItTitle(postItDto.getPostItTitle());
		post.setPostItContents(postItDto.getPostItContents());
		
		postRepo.save(post);

		return getAllPostItByUpdTime();
	}

	public List<PostItDto> markPostIdAsDeleted(Long postId) {
		PostIt post = findPostItByPostItId(postId);
		
		post.setDelFlg(true);
		postRepo.save(post);
		
		return getAllPostItByUpdTime();
	}

	public List<PostItDto> markPostItDtos(Long postId) {
		PostIt post = findPostItByPostItId(postId);

		postRepo.deleteById(postId);

		return getAllPostItByUpdTime();
	}

}
