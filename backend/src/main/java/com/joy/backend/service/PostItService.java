package com.joy.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import com.joy.backend.repository.PostItRepository;
import com.joy.backend.repository.UsrRepository;
import com.joy.backend.repository.PostItLabelRepository;
import com.joy.backend.entity.PostIt;
import com.joy.backend.entity.Usr;
import com.joy.backend.dto.PostItDto;
import com.joy.backend.entity.PostItLabel;

@Service
public class PostItService {
	
	private PostItRepository postRepo;
	private UsrRepository usrRepo;
	private PostItLabelRepository postItLabelRepo;

	public PostItService(PostItRepository postRepo, UsrRepository usrRepo, PostItLabelRepository postItLabelRepo) {
		this.postRepo = postRepo;
		this.usrRepo = usrRepo;
		this.postItLabelRepo = postItLabelRepo;
	}

	private PostItDto toDto(PostIt postIt) {
		PostItDto dto = new PostItDto(postIt.getPostId(), 
																	postIt.getPostItTitle(), 
																	postIt.getPostItContents(), 
																	postIt.getPostItCategory(),
																	postIt.isDone(),
																	postIt.getInsTime(), 
																	postIt.getUpdTime());
		return dto;
	}

	@Transactional(readOnly = true)
	private PostIt findPostItByPostItIdAndLabelId(Long postId, Long userId, Long labelId) {
		PostIt post = postRepo.findByPostIdAndUser_UserIdAndPostItLabel_LabelId(postId, userId, labelId);
		return post;
	}

	@Transactional(readOnly = true)
	public PostItDto findPostItByUserIdAndPostItId(Long postId, Long userId, Long labelId) {
		PostIt post = findPostItByPostItIdAndLabelId(postId, userId, labelId);
		return toDto(post);
	}

	@Transactional(readOnly = true)
	public List<PostItDto> getAllPostItByUserIdAndUpdTime(Long userId, Long labelId) {
		List<PostItDto> postList = postRepo.findAllByUser_UserIdAndPostItLabel_LabelIdAndDoneFalseAndDelFlgFalseOrderByUpdTimeDesc(userId, labelId)
																		.stream()
																		.map(postit->toDto(postit))
																		.collect(Collectors.toList());
		return postList;
	}

	@Transactional(readOnly = true)
	public List<PostItDto> getAllDonePostItByUserIdAndUpdTime(Long userId, Long labelId) {
		List<PostItDto> postList = postRepo.findAllByUser_UserIdAndPostItLabel_LabelIdAndDoneTrueAndDelFlgFalseOrderByUpdTimeDesc(userId, labelId)
																		.stream()
																		.map(postit->toDto(postit))
																		.collect(Collectors.toList());
		return postList;
	}

	@Transactional
	public List<PostItDto> createPostIt(PostItDto postItDto, Long userId, Long labelId) {
		Usr usr = usrRepo.findByUserId(userId);
		PostItLabel postItLabel = postItLabelRepo.findByUser_UserIdAndLabelId(userId,labelId);
		PostIt post = new PostIt(usr,
														postItLabel,
														postItDto.getPostItTitle(), 
														postItDto.getPostItContents(),
														postItDto.getPostItCategory(),
														false);
		postRepo.save(post);

		return getAllPostItByUserIdAndUpdTime(userId, labelId);
	}

	@Transactional
	public List<PostItDto> updatePostIt(PostItDto postItDto, Long userId, Long labelId) {
		PostIt post = findPostItByPostItIdAndLabelId(postItDto.getPostId(), 
																				userId, labelId);

		post.setPostItTitle(postItDto.getPostItTitle());
		post.setPostItContents(postItDto.getPostItContents());
		post.setPostItCategory(postItDto.getPostItCategory());
		postRepo.save(post);

		return getAllPostItByUserIdAndUpdTime(userId, labelId);
	}

	@Transactional
	public List<PostItDto> updatePosItAsDone(Long postId, Long userId, Long labelId) {
		PostIt post = findPostItByPostItIdAndLabelId(postId, userId, labelId);
		post.setDone(true);
		postRepo.save(post);
		return getAllPostItByUserIdAndUpdTime(userId, labelId);
 	}	
 
	@Transactional
	 public List<PostItDto> markPostIdAsDeleted(Long postId, Long userId, Long labelId) {
		PostIt post = findPostItByPostItIdAndLabelId(postId, userId, labelId);
		
		post.setDelFlg(true);
		postRepo.save(post);
		
		return getAllPostItByUserIdAndUpdTime(userId, labelId);
	}

	@Transactional
	public List<PostItDto> deletePostIt(Long postId, Long userId, Long labelId) {
		postRepo.deleteById(postId);

		return getAllPostItByUserIdAndUpdTime(userId, labelId);
	}
}
