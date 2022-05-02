package com.controller;

import com.model.*;
import com.repository.TreatmentRepository;
import com.util.TokenGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

import com.repository.UserRepository;

import java.util.List;


@RestController
public class TreatmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(RendezVousController.class);

    private TreatmentRepository treatmentRepository;
    private UserRepository userRepository;

    @Autowired
    TreatmentController(final TreatmentRepository treatmentRepository, final UserRepository userRepository) {
        this.treatmentRepository = treatmentRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/treatment/user/{userid}")
    @ResponseBody
    public ResponseEntity<List<Treatment>> getTreatmentByUser(@PathVariable(value = "userid") Long userid){

        User user = userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException(Long.toString(userid)));

        List<Treatment> listTreatment = treatmentRepository.findByUser(user)
                .orElseThrow(() -> new TreatmentNotFoundException(user));

        return new ResponseEntity<List<Treatment>>(listTreatment, HttpStatus.OK);
    }

    @PutMapping("/treatment/{userid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Treatment> createTreatment(@RequestBody Treatment treatment,@PathVariable(value = "userid") Long userid){
        User user = userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException(Long.toString(userid)));
        treatment.setUser(user);
        treatmentRepository.save(treatment);
        return new ResponseEntity<Treatment>(treatment, HttpStatus.OK);
    }
}
