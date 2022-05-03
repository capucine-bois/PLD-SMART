package com.controller;

import com.model.Equipment;
import com.model.MedicalFile;
import com.model.User;

import com.repository.EquipmentRepository;
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
public class EquipmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EquipmentController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;
    private EquipmentRepository equipmentRepository;

    @Autowired
    EquipmentController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final EquipmentRepository equipmentRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.equipmentRepository = equipmentRepository;
    }

    @GetMapping("/equipment/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Equipment>> getAllergiesByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Equipment> listEquipment = equipmentRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new EquipmentNotFoundException(medicalFile));

        return new ResponseEntity<List<Equipment>>(listEquipment, HttpStatus.OK);
    }

    @PutMapping("/equipment/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Equipment> createEquipment(@RequestBody Equipment equipment,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        equipment.setMedicalFile(medicalFile);
        equipmentRepository.save(equipment);

        return new ResponseEntity<Equipment>(equipment, HttpStatus.OK);
    }

    @DeleteMapping( "/equipment/{equipmentid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteEquipmentById (@PathVariable(value = "equipmentid") Long equipmentid) {
        equipmentRepository.deleteEquipmentById(equipmentid);
        return new ResponseEntity<>(equipmentid, HttpStatus.OK);
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