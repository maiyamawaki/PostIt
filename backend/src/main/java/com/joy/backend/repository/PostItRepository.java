package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.joy.backend.entity.PostIt;

public interface PostItRepository extends JpaRepository<PostIt, Long>{
	
	public List<PostIt> findAllByUser_UserIdAndDoneFalseAndDelFlgFalseOrderByUpdTimeDesc(Long userId);
	
	public List<PostIt> findAllByUser_UserIdAndDoneTrueAndDelFlgFalseOrderByUpdTimeDesc(Long userId);

	public PostIt findByPostIdAndUser_UserId(Long postId, Long userId);
}
