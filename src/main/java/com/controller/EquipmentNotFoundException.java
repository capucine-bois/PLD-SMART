package com.controller;

import com.model.MedicalFile;


public class EquipmentNotFoundException extends RuntimeException {

    EquipmentNotFoundException(MedicalFile medicalFile){
        super("Could not find equipment of medical file " + medicalFile);
    }
}
