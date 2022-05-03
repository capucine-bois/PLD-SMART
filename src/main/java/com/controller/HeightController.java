package com.controller;

import com.model.Height;
import com.model.MedicalFile;
import com.model.User;
import com.repository.HeightRepository;
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
import java.util.Optional;


@RestController
public class HeightController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HeightController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;

    private HeightRepository heightRepository;

    @Autowired
    HeightController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final HeightRepository heightRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.heightRepository = heightRepository;
    }

    @GetMapping("/height/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Height>> getHeightByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Height> listHeight = heightRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new HeightNotFoundException(medicalFile));

        return new ResponseEntity<List<Height>>(listHeight, HttpStatus.OK);
    }

    @PutMapping("/height/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Height> createHeight(@RequestBody Height height,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        height.setMedicalFile(medicalFile);
        heightRepository.save(height);

        return new ResponseEntity<Height>(height, HttpStatus.OK);
    }

    @DeleteMapping( "/height/{heightid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteHeightById (@PathVariable(value = "heightid") Long heightid) {
        heightRepository.deleteHeightById(heightid);
        return new ResponseEntity<>(heightid, HttpStatus.OK);
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