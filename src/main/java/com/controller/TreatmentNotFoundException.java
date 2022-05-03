package com.controller;

import com.model.Treatment;
import com.model.User;


public class TreatmentNotFoundException extends RuntimeException {

    TreatmentNotFoundException(Long id){
        super("Could not find treatment with id " + id);
    }

    TreatmentNotFoundException(User user){
        super("Could not find treatment on user " + user);
    }
}
