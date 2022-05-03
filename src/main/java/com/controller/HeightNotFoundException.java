package com.controller;

import com.model.MedicalFile;


public class HeightNotFoundException extends RuntimeException {

    HeightNotFoundException(MedicalFile medicalFile){
        super("Could not find height of medical file " + medicalFile);
    }
}
