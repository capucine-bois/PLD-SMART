package com.controller;

import com.model.Allergy;

import com.model.MedicalFile;
import com.repository.MedicalFileRepository;

import com.model.User;
import com.repository.UserRepository;

import com.model.RendezVous;
import com.repository.RendezVousRepository;
import java.io.Serializable;

import com.util.TokenGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


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

    @PutMapping("/rendezvous/{userid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<RendezVous> createRendezVous(@RequestBody RendezVous rendezvous,@PathVariable(value = "userid") Long userid){
        User user = userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException(Long.toString(userid)));
        rendezvous.setUser(user);
        rendezVousRepository.save(rendezvous);
        return new ResponseEntity<RendezVous>(rendezvous, HttpStatus.OK);
    }

    @DeleteMapping( "/rendezvous/{rendezvousid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteRendezVousById (@PathVariable(value = "rendezvousid") Long rendezvousid) {
        rendezVousRepository.deleteRendezVousById(rendezvousid);
        return new ResponseEntity<>(rendezvousid, HttpStatus.OK);
    }


    @PostMapping("/rendezvous/{rendezvousid}")
    @ResponseBody
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    @Transactional
    public ResponseEntity<RendezVous> modifyRendezVousById (@RequestBody RendezVous modifiedRendezVous,@PathVariable(value = "rendezvousid") Long rendezvousid) {
        RendezVous rendezVousToModify = rendezVousRepository.getById(rendezvousid);
        rendezVousToModify.setDate(modifiedRendezVous.getDate());
        rendezVousToModify.setLocation(modifiedRendezVous.getLocation());
        rendezVousToModify.setNamePractitioner(modifiedRendezVous.getNamePractitioner());
        rendezVousToModify.setTypePractitioner(modifiedRendezVous.getTypePractitioner());
        rendezVousToModify.setRemark(modifiedRendezVous.getRemark());
        rendezVousRepository.save(rendezVousToModify);
        return new ResponseEntity<RendezVous>(rendezVousToModify, HttpStatus.OK);
    }
}