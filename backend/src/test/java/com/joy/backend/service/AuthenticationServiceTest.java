package com.joy.backend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import com.joy.backend.dto.RegisterRequest;
import com.joy.backend.dto.UsrDto;
import com.joy.backend.repository.CategoryRepository;
import com.joy.backend.repository.PostItRepository;
import com.joy.backend.repository.UsrRepository;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class AuthenticationServiceTest {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UsrRepository usrRepository;

    @Autowired
    private PostItRepository postItRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @BeforeEach
    void setUp() {
        postItRepository.deleteAll();
        categoryRepository.deleteAll();
        usrRepository.deleteAll();
    }

    @Test
    void createUsr_shouldReturnCorrectUserProfile() {
        RegisterRequest request = new RegisterRequest("Alice", "alice@example.com", "password123");

        UsrDto createdUser = authenticationService.createUsr(request);

        assertThat(createdUser).isNotNull();
        assertThat(createdUser.getUserName()).isEqualTo("Alice");
        assertThat(createdUser.getEmail()).isEqualTo("alice@example.com");
        assertThat(createdUser.getPassword()).isNull();
    }
}
