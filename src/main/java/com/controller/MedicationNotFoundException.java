package com.controller;

import com.model.Treatment;


public class MedicationNotFoundException extends RuntimeException {

    MedicationNotFoundException(Treatment treatment){
        super("Could not find medications on treatment " + treatment);
    }
}
