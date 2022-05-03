package com.controller;

import com.model.Weight;
import com.model.MedicalFile;
import com.model.User;
import com.repository.WeightRepository;
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
public class WeightController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WeightController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;

    private WeightRepository weightRepository;

    @Autowired
    WeightController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final WeightRepository weightRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.weightRepository = weightRepository;
    }

    @GetMapping("/weight/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Weight>> getHeightByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Weight> listWeight = weightRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new HeightNotFoundException(medicalFile));

        return new ResponseEntity<List<Weight>>(listWeight, HttpStatus.OK);
    }

    @PutMapping("/weight/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Weight> createHeight(@RequestBody Weight weight,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        weight.setMedicalFile(medicalFile);
        weightRepository.save(weight);

        return new ResponseEntity<Weight>(weight, HttpStatus.OK);
    }

    @DeleteMapping( "/weight/{weightid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteWeightById (@PathVariable(value = "weightid") Long weightid) {
        weightRepository.deleteWeightById(weightid);
        return new ResponseEntity<>(weightid, HttpStatus.OK);
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
    }
    
     */
}