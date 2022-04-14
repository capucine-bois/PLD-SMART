package com.controller;

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
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private UserRepository userRepository;

    @Autowired
    UserController(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PutMapping("/user/")
    @ResponseBody
    @Transactional
    public ResponseEntity<String> createUser(@RequestBody User user){
        String token = "ccc";
        user.setToken(token);
        userRepository.save(user);
        return new ResponseEntity<String>(token, HttpStatus.OK);
    }


    @GetMapping("/user/token/{token}")
    @ResponseBody
    public ResponseEntity<User> getUserByToken(@PathVariable(value = "token") String token){

        User user = userRepository.findByToken(token)
                                  .orElseThrow(() -> new UserNotFoundException(token));

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}
