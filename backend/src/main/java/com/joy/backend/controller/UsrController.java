package com.joy.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.joy.backend.dto.UsrDto;
import com.joy.backend.service.AuthenticationService;

@Controller
@RequestMapping("/usr")
public class UsrController {

	private AuthenticationService usrService;

	public UsrController(AuthenticationService usrService) {
		this.usrService = usrService;
	}

	@PutMapping("/{userId}")
	public UsrDto updateUsr(@PathVariable Long userId, @RequestBody UsrDto usrDto) {
		usrService.updateUsr(usrDto);
		return usrDto;
	}
  
}
