package com.joy.backend.controller;

import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

import com.joy.backend.service.AuthenticationService;

import com.joy.backend.dto.UsrDto;
import com.joy.backend.dto.LoginRequest;
import com.joy.backend.dto.RegisterRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
	
	private AuthenticationService usrService;

	public AuthenticationController(AuthenticationService usrService) {
		this.usrService = usrService;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
		UsrDto usrDto = usrService.loginByEmail(loginRequest);
		if(usrDto == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
													 	.body(Map.of("message", "Invalid email or password"));
		} else {
			session.setAttribute("LOGIN_USERID", usrDto.getUserId());
			return ResponseEntity.ok(usrDto);
		}
	}

	@PostMapping("/logout")
	public ResponseEntity<?> logout(HttpSession session) {
		System.out.println("Logout called");
		session.invalidate();
		return ResponseEntity.ok().build();
	}

	@GetMapping("/getUser")
	public ResponseEntity<?> getLoginUser(HttpSession session) {
		Long userId = (Long)session.getAttribute("LOGIN_USERID");
		System.out.println("userId: " + userId);
		if(userId == null) {
			return ResponseEntity.status(401).body("NOT LOGNI");
		}
		return ResponseEntity.ok(userId);
	}
	

	@PostMapping("/registerUsr")
	public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest,HttpSession session) {
		UsrDto usrDto = usrService.createUsr(registerRequest);
		if(usrDto != null) {
			session.setAttribute("LOGIN_USERID", usrDto.getUserId());
			return ResponseEntity.ok(usrDto);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
															.body(Map.of("message", "Invalid user information"));
		}
	}
}
