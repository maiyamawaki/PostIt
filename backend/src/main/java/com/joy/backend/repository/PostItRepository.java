package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.joy.backend.entity.PostIt;

public interface PostItRepository extends JpaRepository<PostIt, Long>{
	
	// find all postIdData order by updateTime
	List<PostIt> findAllByDelFlgFalseOrderByUpdTimeDesc();

}
