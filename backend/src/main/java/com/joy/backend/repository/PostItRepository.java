package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.joy.backend.entity.PostIt;

public interface PostItRepository extends JpaRepository<PostIt, Long>{

	public List<PostIt> findAllByUser_UserIdAndPostItLabel_LabelIdAndDoneFalseAndDelFlgFalseOrderByUpdTimeDesc(Long userId, Long labelId);
	
	public List<PostIt> findAllByUser_UserIdAndPostItLabel_LabelIdAndDoneTrueAndDelFlgFalseOrderByUpdTimeDesc(Long userId, Long labelId);

	public PostIt findByPostIdAndUser_UserIdAndPostItLabel_LabelId(Long postId, Long userId, Long labelId);
}
