package com.joy.backend.service;

import java.util.stream.Collectors;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.joy.backend.repository.UsrRepository;
import com.joy.backend.entity.Usr;
import com.joy.backend.dto.UsrDto;
import com.joy.backend.dto.RegisterRequest;
import com.joy.backend.dto.LoginRequest;

@Service
public class AuthenticationService {
	
	private UsrRepository usrRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public AuthenticationService(UsrRepository usrRepository) {
		this.usrRepository = usrRepository;
	}

	private UsrDto toDto(Usr usr) {
		UsrDto dto = new UsrDto(usr.getUserId(),
														usr.getEmail(),
														usr.getUserName(),
														usr.getPassword());
		return dto;
	}

	public List<UsrDto> findAllUsers() {
		List<UsrDto> usrs = usrRepository.findAll()
																	.stream()
																	.map(usr->toDto(usr))
																	.collect(Collectors.toList());

		return usrs;
	}

	private Usr findUsrByUserName(String userName) {
		Usr usr = usrRepository.findByUserName(userName);
		return usr;
	}

	private Usr findUsrByEmail(String email) {
		Usr usr = usrRepository.findByEmail(email);
		return usr;
	}

	public UsrDto loginByEmail(LoginRequest	loginRequest) {
		Usr user = findUsrByEmail(loginRequest.getEmail());
		if(user == null) {
			System.out.println("Login failed");
			return null;
		} else {
			System.out.println(passwordEncoder.matches(loginRequest.getPassword(), user.getPassword()));
			System.out.println(loginRequest.getPassword());
			System.out.println(user.getPassword());
			if(passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
				System.out.println("Login success");
				return toDto(user);
			} else {
				System.out.println("Login failed by password");
				return null;
			}
		}
	}

	public UsrDto createUsr(RegisterRequest registerRequest) {
		Usr existUser = findUsrByEmail(registerRequest.getEmail());
		Usr newUsr = null;
		String hashedPassword = passwordEncoder.encode(registerRequest.getPassword());
		if(existUser == null) {
			newUsr = new Usr(registerRequest.getUserName(),
												registerRequest.getEmail(),
												hashedPassword);
			usrRepository.save(newUsr);
			return toDto(newUsr);		
		} else {
			return null;
		}
	}

	public UsrDto updateUsr(UsrDto usrDto) {
		Usr existUser = findUsrByUserName(usrDto.getUserName());
		if(existUser != null) {
			existUser.setUserName(usrDto.getUserName());
			existUser.setEmail(usrDto.getEmail());
			existUser.setPassword(usrDto.getPassword());
			usrRepository.save(existUser);
			return toDto(existUser);
		} else {
			throw new RuntimeException("User not found");
		}
	}


}
