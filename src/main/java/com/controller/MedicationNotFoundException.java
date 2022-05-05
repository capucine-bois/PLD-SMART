package com.controller;

import com.model.Treatment;


public class MedicationNotFoundException extends RuntimeException {

    MedicationNotFoundException(Long id){
        super("Could not find medications with id " +id);
    }
}
