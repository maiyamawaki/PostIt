package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.joy.backend.entity.PostIt;

public interface PostItRepository extends JpaRepository<PostIt, Long>{
	
	public List<PostIt> findAllByUsr_UserIdAndDelFlgFalseOrderByUpdTimeDesc(Long userId);
	
	public PostIt findByPostIdAndUsr_UserId(Long postId, Long userId);
}
