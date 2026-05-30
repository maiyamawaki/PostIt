package com.joy.backend.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.joy.backend.repository.PostItRepository;
import com.joy.backend.repository.UsrRepository;
import com.joy.backend.entity.PostIt;
import com.joy.backend.entity.Usr;
import com.joy.backend.dto.PostItDto;

@Service
public class PostItService {
	
	private PostItRepository postRepo;
	private UsrRepository usrRepo;

	public PostItService(PostItRepository postRepo, UsrRepository usrRepo) {
		this.postRepo = postRepo;
		this.usrRepo = usrRepo;
	}

	private PostItDto toDto(PostIt postIt) {
		PostItDto dto = new PostItDto(postIt.getPostId(), 
																	postIt.getPostItTitle(), 
																	postIt.getPostItContents(), 
																	postIt.isDone(),
																	postIt.getInsTime(), 
																	postIt.getUpdTime());
		return dto;
	}

	private PostIt findPostItByPostItId(Long postId, Long userId) {
		PostIt post = postRepo.findByPostIdAndUser_UserId(postId, userId);
		return post;
	}

	public List<PostItDto> getAllPostItByUserIdAndUpdTime(Long userId) {
		List<PostItDto> postList = postRepo.findAllByUser_UserIdAndDoneFalseAndDelFlgFalseOrderByUpdTimeDesc(userId)
																		.stream()
																		.map(postit->toDto(postit))
																		.collect(Collectors.toList());
		return postList;
	}

	public List<PostItDto> getAllDonePostItByUserIdAndUpdTime(Long userId) {
		List<PostItDto> postList = postRepo.findAllByUser_UserIdAndDoneTrueAndDelFlgFalseOrderByUpdTimeDesc(userId)
																		.stream()
																		.map(postit->toDto(postit))
																		.collect(Collectors.toList());
		return postList;
	}
	public List<PostItDto> createPostIt(PostItDto postItDto, Long userId) {
		Usr usr = usrRepo.findByUserId(userId);
		PostIt post = new PostIt(usr,
														postItDto.getPostItTitle(), 
														postItDto.getPostItContents(),
														false);
		postRepo.save(post);

		return getAllPostItByUserIdAndUpdTime(userId);
	}

	public List<PostItDto> updatePostIt(PostItDto postItDto, Long userId) {
		PostIt post = findPostItByPostItId(postItDto.getPostId(), 
																				userId);

		post.setPostItTitle(postItDto.getPostItTitle());
		post.setPostItContents(postItDto.getPostItContents());
		
		postRepo.save(post);

		return getAllPostItByUserIdAndUpdTime(userId);
	}

	public List<PostItDto> updatePosItAsDone(Long postId, Long userId) {
		PostIt post = findPostItByPostItId(postId, userId);
		post.setDone(true);
		postRepo.save(post);
		return getAllPostItByUserIdAndUpdTime(userId);
 	}	
 
	 public List<PostItDto> markPostIdAsDeleted(Long postId, Long userId) {
		PostIt post = findPostItByPostItId(postId, userId);
		
		post.setDelFlg(true);
		postRepo.save(post);
		
		return getAllPostItByUserIdAndUpdTime(userId);
	}

	public List<PostItDto> deletePostIt(Long postId, Long userId) {
		postRepo.deleteById(postId);

		return getAllPostItByUserIdAndUpdTime(userId);
	}
}
