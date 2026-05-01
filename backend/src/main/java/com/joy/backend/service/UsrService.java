package com.joy.backend.service;

import java.util.stream.Collectors;
import java.util.List;

import org.springframework.stereotype.Service;

import com.joy.backend.repository.UsrRepository;
import com.joy.backend.entity.Usr;
import com.joy.backend.dto.UsrDto;

@Service
public class UsrService {
	
	private UsrRepository usrRepository;

	public UsrService(UsrRepository usrRepository) {
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

	public UsrDto findByEmailAndPassword(String email, String password) {
		Usr usr = usrRepository.findByEmailAndPassword(email, password);
		if(usr != null) {
			return toDto(usr);
		}
		return null;
	}

	public UsrDto createUsr(UsrDto usrDto) {
		Usr existUser = findUsrByUserName(usrDto.getUserName());
		Usr newUsr = null;
		if(existUser == null) {
			newUsr = new Usr(usrDto.getUserName(),
												usrDto.getEmail(),
												usrDto.getPassword());
			usrRepository.save(newUsr);
			return toDto(newUsr);
		} else {
			throw new RuntimeException("User already exists");
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
