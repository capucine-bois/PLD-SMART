package com.controller;

import com.model.Vaccine;
import com.model.MedicalFile;
import com.model.User;
import com.repository.VaccineRepository;
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
public class VaccineController {

    private static final Logger LOGGER = LoggerFactory.getLogger(VaccineController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;
    private VaccineRepository vaccineRepository;

    @Autowired
    VaccineController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final VaccineRepository vaccineRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.vaccineRepository = vaccineRepository;
    }

    @GetMapping("/vaccine/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Vaccine>> getVaccinesByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Vaccine> listVaccine = vaccineRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new VaccineNotFoundException(medicalFile));

        return new ResponseEntity<List<Vaccine>>(listVaccine, HttpStatus.OK);
    }

    @PutMapping("/vaccine/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Vaccine> createVaccine(@RequestBody Vaccine vaccine,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        vaccine.setMedicalFile(medicalFile);
        vaccineRepository.save(vaccine);

        return new ResponseEntity<Vaccine>(vaccine, HttpStatus.OK);
    }

    @DeleteMapping( "/vaccine/{vaccineid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteVaccineById (@PathVariable(value = "vaccineid") Long vaccineid) {
        vaccineRepository.deleteVaccineById(vaccineid);
        return new ResponseEntity<>(vaccineid, HttpStatus.OK);
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