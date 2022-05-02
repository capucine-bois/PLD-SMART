package com.controller;

import com.model.Treatment;
import com.model.User;


public class TreatmentNotFoundException extends RuntimeException {

    TreatmentNotFoundException(User user){
        super("Could not find treatments of " + user);
    }
}
