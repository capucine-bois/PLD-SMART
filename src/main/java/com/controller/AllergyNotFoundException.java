package com.controller;

import com.model.MedicalFile;


public class AllergyNotFoundException extends RuntimeException {

    AllergyNotFoundException(MedicalFile medicalFile){
        super("Could not find allergy of medical file " + medicalFile);
    }
}
