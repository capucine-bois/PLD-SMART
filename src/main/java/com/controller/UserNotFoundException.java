package com.controller;
import com.model.User;

public class UserNotFoundException extends RuntimeException {

    UserNotFoundException(String token){
        super("Could not find user with token " + token);
    }
}
