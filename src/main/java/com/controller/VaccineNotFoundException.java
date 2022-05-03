package com.controller;

import com.model.MedicalFile;


public class VaccineNotFoundException extends RuntimeException {

    VaccineNotFoundException(MedicalFile medicalFile){
        super("Could not find vaccine of medical file " + medicalFile);
    }
}
