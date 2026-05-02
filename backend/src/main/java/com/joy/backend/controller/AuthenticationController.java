package com.joy.backend.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joy.backend.service.AuthenticationService;
import com.joy.backend.dto.UsrDto;
import com.joy.backend.dto.LoginRequest;
import com.joy.backend.dto.RegisterRequest;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
	
	private AuthenticationService usrService;

	public AuthenticationController(AuthenticationService usrService) {
		this.usrService = usrService;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		UsrDto usrDto = usrService.loginByEmail(loginRequest);
		if(usrDto == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
													 	.body(Map.of("message", "Invalid email or password"));
		} else {
			return ResponseEntity.ok(usrDto);
		}
	}

	@PostMapping("/registerUsr")
	public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
		UsrDto usrDto = usrService.createUsr(registerRequest);
		if(usrDto != null) {
			return ResponseEntity.ok(usrDto);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
															.body(Map.of("message", "Invalid user information"));
		}
	}
}
