package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joy.backend.entity.Usr;

public interface UsrRepository extends JpaRepository<Usr, Long>{
	
	// find by userName
	Usr findByUserName(String userName);
	
	public Usr findByEmailAndPassword(String email, String password);

}
