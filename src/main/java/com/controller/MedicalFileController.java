package com.controller;

import com.model.MedicalFile;
import com.repository.MedicalFileRepository;
import com.util.TokenGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

import com.model.User;
import com.repository.UserRepository;


@RestController
public class MedicalFileController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MedicalFileController.class);

    private MedicalFileRepository medicalFileRepository;
    private UserRepository userRepository;

    @Autowired
    MedicalFileController(final MedicalFileRepository medicalFileRepository, final UserRepository userRepository) {
        this.medicalFileRepository = medicalFileRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/medical/token/{token}")
    @ResponseBody
    public ResponseEntity<User> getMedicalByToken(@PathVariable(value = "token") String token){

        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));
        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
