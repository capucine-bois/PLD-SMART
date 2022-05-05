package com.controller;

import com.model.Pathology;
import com.model.MedicalFile;
import com.model.User;
import com.repository.PathologyRepository;
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
public class PathologyController {

    private static final Logger LOGGER = LoggerFactory.getLogger(PathologyController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;
    private PathologyRepository pathologyRepository;

    @Autowired
    PathologyController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final PathologyRepository pathologyRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.pathologyRepository = pathologyRepository;
    }

    @GetMapping("/pathology/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Pathology>> getPathologiesByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Pathology> listPathology = pathologyRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new PathologyNotFoundException(medicalFile));

        return new ResponseEntity<List<Pathology>>(listPathology, HttpStatus.OK);
    }

    @PutMapping("/pathology/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Pathology> createPathology(@RequestBody Pathology pathology,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        pathology.setMedicalFile(medicalFile);
        pathologyRepository.save(pathology);

        return new ResponseEntity<Pathology>(pathology, HttpStatus.OK);
    }

    @DeleteMapping( "/pathology/{pathologyid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deletePathologyById (@PathVariable(value = "pathologyid") Long pathologyid) {
        pathologyRepository.deletePathologyById(pathologyid);
        return new ResponseEntity<>(pathologyid, HttpStatus.OK);
    }

/*
    @PostMapping("/allergy/{allergyid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Allergy> modifyAllergyById (@RequestBody Allergy modifiedAllergy,@PathVariable(value = "allergyid") Long allergyid) {
        Allergy allergyToModify = allergyRepository.getById(allergyid);
        allergyToModify.setDescription(modifiedAllergy.getDescription());
        allergyToModify.setType(modifiedAllergy.getType());
        allergyToModify.setName(modifiedAllergy.getName());
        allergyRepository.save(allergyToModify);
        return new ResponseEntity<Allergy>(allergyToModify, HttpStatus.OK);
    }*/

}