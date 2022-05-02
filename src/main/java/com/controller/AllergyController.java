package com.controller;

import com.model.MedicalFile;

import com.model.User;
import com.model.Allergy;
import com.repository.AllergyRepository;
import com.repository.MedicalFileRepository;

import com.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
public class AllergyController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AllergyController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;

    private AllergyRepository allergyRepository;

    @Autowired
    AllergyController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final AllergyRepository allergyRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.allergyRepository = allergyRepository;
    }

    @GetMapping("/allergy/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Allergy>> getAllergiesByMFID(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Allergy> listAllergy = allergyRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new AllergyNotFoundException(medicalFile));

        return new ResponseEntity<List<Allergy>>(listAllergy, HttpStatus.OK);
    }

    @PutMapping("/allergy/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Allergy> createAllergy(@RequestBody Allergy allergy,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        allergy.setMedicalFile(medicalFile);
        allergyRepository.save(allergy);

        return new ResponseEntity<Allergy>(allergy, HttpStatus.OK);
    }

    @DeleteMapping( "/allergy/{allergyid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteAllergyById (@PathVariable(value = "allergyid") Long allergyid) {
        allergyRepository.deleteAllergyById(allergyid);
        return new ResponseEntity<>(allergyid, HttpStatus.OK);
    }


    @PostMapping("/allergy/{allergyid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Allergy> modifyAllergyById (@RequestBody Allergy modifiedAllergy,@PathVariable(value = "allergyid") Long allergyid) {
        Allergy allergyToModify = allergyRepository.getById(allergyid);
        allergyToModify.setDescription(modifiedAllergy.getDescription());
        allergyToModify.setType(modifiedAllergy.getType());
        allergyToModify.setName(modifiedAllergy.getName());
        return new ResponseEntity<Allergy>(allergyToModify, HttpStatus.OK);
    }
}