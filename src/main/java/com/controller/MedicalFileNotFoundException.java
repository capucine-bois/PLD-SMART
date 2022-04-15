package com.controller;

import com.model.User;

public class MedicalFileNotFoundException extends RuntimeException {

    MedicalFileNotFoundException(User user){
        super("Could not find user " + user);
    }
}
