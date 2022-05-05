package com.controller;

import com.model.Treatment;


public class MedicationInTreatmentNotFoundException extends RuntimeException {

    MedicationInTreatmentNotFoundException(Treatment treatment){
        super("Could not find medications on treatment " + treatment);
    }
}
