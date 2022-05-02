package com.controller;

import com.model.Treatment;
import com.model.MedicalFile;


public class TreatmentNotFoundException extends RuntimeException {

    TreatmentNotFoundException(MedicalFile medicalFile){
        super("Could not find treatments on medical file " + medicalFile);
    }
}
