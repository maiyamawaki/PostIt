package com.joy.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;

import com.joy.backend.service.UsrService;
import com.joy.backend.dto.UsrDto;
import com.joy.backend.dto.LoginRequest;

@RestController
@RequestMapping("/api/auth")
public class LoginController {
	
	private UsrService usrService;

	public LoginController(UsrService usrService) {
		this.usrService = usrService;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		System.out.println("test");
		UsrDto usrDto = usrService.findByEmailAndPassword(
																	loginRequest.getEmail(), 
																	loginRequest.getPassword());
		if(usrDto == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
													 	.body(Map.of("message", "Invalid email or password"));
		} else {
			return ResponseEntity.ok(usrDto);
		}
	}
	
}
