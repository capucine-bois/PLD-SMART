package com.controller;

import com.model.Allergy;

import com.model.MedicalFile;
import com.repository.MedicalFileRepository;

import com.model.User;
import com.repository.UserRepository;

import com.model.RendezVous;
import com.repository.RendezVousRepository;

import com.util.TokenGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
public class RendezVousController {

    private static final Logger LOGGER = LoggerFactory.getLogger(RendezVousController.class);

    private UserRepository userRepository;
    private RendezVousRepository rendezVousRepository;

    @Autowired
    RendezVousController(final RendezVousRepository rendezVousRepository, final UserRepository userRepository, final MedicalFileRepository medicalFileRepository) {
        this.rendezVousRepository = rendezVousRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/rendezvous/user/{userid}")
    @ResponseBody
    public ResponseEntity<List<RendezVous>> getRendezVousByUser(@PathVariable(value = "userid") Long userid){

        User user = userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException(Long.toString(userid)));

        List<RendezVous> listRendezVous = rendezVousRepository.findByUser(user)
                .orElseThrow(() -> new RendezVousNotFoundException(user));

        return new ResponseEntity<List<RendezVous>>(listRendezVous, HttpStatus.OK);
    }

}