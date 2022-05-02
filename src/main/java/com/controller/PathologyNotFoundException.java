package com.controller;

import com.model.MedicalFile;


public class PathologyNotFoundException extends RuntimeException {

    PathologyNotFoundException(MedicalFile medicalFile){
        super("Could not find pathology of medical file " + medicalFile);
    }
}
