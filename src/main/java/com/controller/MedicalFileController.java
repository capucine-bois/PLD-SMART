package com.controller;

import com.model.MedicalFile;
import com.repository.MedicalFileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

import com.model.User;
import com.repository.UserRepository;


@RestController
public class MedicalFileController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MedicalFileController.class);

    private MedicalFileRepository medicalFileRepository;

    @Autowired
    MedicalFileController(final MedicalFileRepository medicalFileRepository) {
        this.medicalFileRepository = medicalFileRepository;
    }

}
