package com.joy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joy.backend.entity.Usr;

public interface UsrRepository extends JpaRepository<Usr, Long>{
	
	public Usr findByUserName(String userName);
	
	public Usr findByEmail(String email);

	public Usr findByEmailAndPassword(String email, String password);
	
	public Usr findByUserId(Long userId);

}
