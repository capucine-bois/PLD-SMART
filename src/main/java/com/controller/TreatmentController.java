package com.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.model.*;
import com.repository.MedicalFileRepository;
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
    private MedicalFileRepository medicalFileRepository;

    @Autowired
    TreatmentController(final TreatmentRepository treatmentRepository, final MedicalFileRepository medicalFileRepository, final UserRepository userRepository) {
        this.treatmentRepository = treatmentRepository;
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
    }

    @GetMapping("/treatment/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Treatment>> getTreatmentByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));


        List<Treatment> listTreatment = treatmentRepository.findByUser(user)
                .orElseThrow(() -> new TreatmentNotFoundException(user));

        return new ResponseEntity<List<Treatment>>(listTreatment, HttpStatus.OK);
    }

    @PutMapping("/treatment/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Treatment> createTreatment(@RequestBody Treatment treatment,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));
        treatment.setUser(user);
        treatmentRepository.save(treatment);
        return new ResponseEntity<Treatment>(treatment, HttpStatus.OK);
    }

    @DeleteMapping( "/treatment/{treatmentid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteTreatmentById (@PathVariable(value = "treatmentid") Long treatmentid) {
        treatmentRepository.deleteTreatmentById(treatmentid);
        return new ResponseEntity<>(treatmentid, HttpStatus.OK);
    }


    @PostMapping("/rendezvous/{treatmentid}")
    @ResponseBody
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    @Transactional
    public ResponseEntity<Treatment> modifyTreatmentById (@RequestBody Treatment modifiedTreatment,@PathVariable(value = "treamentid") Long treatmentid) {
        Treatment treatmentToModify = treatmentRepository.getById(treatmentid);
        treatmentToModify.setName(modifiedTreatment.getName());
        treatmentToModify.setStartDate(modifiedTreatment.getStartDate());
        treatmentToModify.setEndDate(modifiedTreatment.getEndDate());
        treatmentToModify.setNumFrequency(modifiedTreatment.getNumFrequency());
        treatmentToModify.setQuantity(modifiedTreatment.getQuantity());
        treatmentToModify.setRemark(modifiedTreatment.getRemark());
        treatmentRepository.save(treatmentToModify);
        return new ResponseEntity<Treatment>(treatmentToModify, HttpStatus.OK);
    }
}
