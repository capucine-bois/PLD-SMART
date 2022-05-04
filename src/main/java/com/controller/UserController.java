package com.controller;

import com.model.*;
import com.repository.MedicalFileRepository;
import com.repository.RendezVousRepository;

import com.util.TokenGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

import com.repository.UserRepository;

import java.util.Date;


@RestController
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;



    @Autowired
    UserController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository  = medicalFileRepository;
    }


    @PutMapping("/user/")
    @ResponseBody
    @Transactional
    public ResponseEntity<User> createUser(@RequestBody User user){
        String token = TokenGenerator.generateRandomPassword(12);
        user.setToken(token);
        MedicalFile medicalFile = new MedicalFile();
        medicalFile.setUser(user);
        userRepository.save(user);
        medicalFileRepository.save(medicalFile);
        user.setMedicalFile(medicalFile);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PutMapping("/user/{token}")
    @ResponseBody
    @Transactional
    public ResponseEntity<User> modifyUser (@RequestBody User user,@PathVariable(value = "token") String token) {
        User userToModify = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));
        if(user.getName()!=null) {
            userToModify.setName(user.getName());
        }
        if(user.getSurname()!=null) {
            userToModify.setSurname(user.getSurname());
        }
        if(user.getBirthDate()!=null) {
            userToModify.setBirthDate(user.getBirthDate());
        }
        userRepository.save(userToModify);
        return new ResponseEntity<User>(userToModify, HttpStatus.OK);
    }



    @GetMapping("/user/token/{token}")
    @ResponseBody
    public ResponseEntity<User> getUserByToken(@PathVariable(value = "token") String token){

        User user = userRepository.findByToken(token)
                                  .orElseThrow(() -> new UserNotFoundException(token));

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/user/birthdate/token/{token}")
    @ResponseBody
    public ResponseEntity<Date> getBirthDateByToken(@PathVariable(value = "token") String token){

        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));

        Date birthDate = user.getBirthDate();

        return new ResponseEntity<Date>(birthDate, HttpStatus.OK);
    }

    @GetMapping("/user/name/{name}")
    @ResponseBody
    public ResponseEntity<User> getUserByName(@PathVariable(value = "name") String name){

        User user = userRepository.findByName(name)
                .orElseThrow(() -> new UserNotFoundException(name));

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/user/userID/{userID}")
    @ResponseBody
    public ResponseEntity<User> getUserByID(@PathVariable(value = "userID") Long userID){

        User user = userRepository.findById(userID)
                .orElseThrow(() -> new UserNotFoundException(Long.toString(userID)));

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
