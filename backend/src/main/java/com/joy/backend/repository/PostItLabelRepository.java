package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joy.backend.entity.PostItLabel;

import java.util.List;

public interface PostItLabelRepository extends JpaRepository<PostItLabel, Long> {
	
	public PostItLabel findByUser_UserIdAndLabelId(Long userId, Long labelId);

	public List<PostItLabel> findAllByUser_UserIdOrderByUpdTimeDesc(Long userId);
													
}
