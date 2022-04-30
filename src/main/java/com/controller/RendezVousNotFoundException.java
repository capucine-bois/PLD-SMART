package com.controller;

import com.model.RendezVous;
import com.model.User;


public class RendezVousNotFoundException extends RuntimeException {

    RendezVousNotFoundException(User user){
        super("Could not find rendez vous of " + user);
    }
}
