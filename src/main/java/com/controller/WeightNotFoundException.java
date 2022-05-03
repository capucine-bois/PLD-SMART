package com.controller;

import com.model.MedicalFile;


public class WeightNotFoundException extends RuntimeException {

    WeightNotFoundException(MedicalFile medicalFile){
        super("Could not find weight of medical file " + medicalFile);
    }
}
