package com.joy.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.joy.backend.repository.PostItLabelRepository;
import com.joy.backend.repository.UsrRepository;
import com.joy.backend.dto.PostItLabelDto;
import com.joy.backend.entity.PostItLabel;
import com.joy.backend.entity.Usr;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostItLabelService {
	
	private PostItLabelRepository postItLabelRepo;
	private UsrRepository usrRepo;

	public PostItLabelService(PostItLabelRepository postItLabelRepo, UsrRepository usrRepo) {
		this.postItLabelRepo = postItLabelRepo;
		this.usrRepo = usrRepo;
	}

	private PostItLabelDto toDto(PostItLabel postItLabel) {
		PostItLabelDto dto = new PostItLabelDto(postItLabel.getLabelId(), 
																	postItLabel.getLabelName(), 
																	postItLabel.getTodoDate(),
																	postItLabel.isDone(),
																	postItLabel.getInsTime(), 
																	postItLabel.getUpdTime());
		return dto;
	}

	@Transactional(readOnly = true)
	public List<PostItLabelDto> getAllPostItLabelByUserIdAndUpdTime(Long userId) {
		List<PostItLabelDto> postItLabelList = postItLabelRepo.findAllByUser_UserIdOrderByUpdTimeDesc(userId)
																		.stream()
																		.map(postitlabel->toDto(postitlabel))
																		.collect(Collectors.toList());
		return postItLabelList;
	}

	@Transactional
	public List<PostItLabelDto> createPostItLabel(PostItLabelDto postItLabelDto, Long userid) {
		Usr usr = usrRepo.findByUserId(userid);
		PostItLabel postItLabel = new PostItLabel(usr,
																							postItLabelDto.getLabelName(),
																							postItLabelDto.getTodoDate(),
																							false);
		postItLabelRepo.save(postItLabel);
		return getAllPostItLabelByUserIdAndUpdTime(userid);
	}
}
