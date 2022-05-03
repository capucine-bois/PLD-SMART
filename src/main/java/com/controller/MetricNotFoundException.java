package com.controller;

import com.model.MedicalFile;


public class MetricNotFoundException extends RuntimeException {

    MetricNotFoundException(Long id){
        super("Could not find metric with ID " + id);
    }
}
