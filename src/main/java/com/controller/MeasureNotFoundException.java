package com.controller;

import com.model.Metric;


public class MeasureNotFoundException extends RuntimeException {

    MeasureNotFoundException(Metric metric){
        super("Could not find measures of metric " + metric);
    }
}
