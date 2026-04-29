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
import com.joy.backend.service.UsrService;

@Controller
@RequestMapping("/usr")
public class UsrController {

	private UsrService usrService;

	public UsrController(UsrService usrService) {
		this.usrService = usrService;
	}	

	@GetMapping
	public List<UsrDto> getUser() {
		System.out.println("a vaar");
		return usrService.findAllUsers();
	} 

	@PostMapping
	public UsrDto createUser(@RequestBody UsrDto usrDto) {
		return usrService.createUsr(usrDto);
	} 

	@PutMapping("/{userId}")
	public UsrDto updateUsr(@PathVariable Long userId, @RequestBody UsrDto usrDto) {
		usrService.updateUsr(usrDto);
		return usrDto;
	}

	

}
