package com.controller;

import com.model.Treatment;
import com.model.Medication;
import com.repository.MedicalFileRepository;
import com.repository.TreatmentRepository;
import com.repository.MedicationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
public class MedicationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(RendezVousController.class);

    private TreatmentRepository treatmentRepository;
    private MedicationRepository medicationRepository;


    @Autowired
    MedicationController(final TreatmentRepository treatmentRepository, final MedicationRepository medicationRepository) {
        this.treatmentRepository = treatmentRepository;

        this.medicationRepository = medicationRepository;
    }

    @GetMapping("/medication/treatment/{treatmentid}")
    @ResponseBody
    public ResponseEntity<List<Medication>> getMedicationByTreatment(@PathVariable(value = "treatmentid") Long treatmentid){

        Treatment treatment = treatmentRepository.findById(treatmentid)
                .orElseThrow(() -> new TreatmentNotFoundException(treatmentid));


        List<Medication> listMedication = medicationRepository.findByTreatment(treatment)
                .orElseThrow(() -> new MedicationInTreatmentNotFoundException(treatment));

        return new ResponseEntity<List<Medication>>(listMedication, HttpStatus.OK);
    }

    @PutMapping("/medication/treatment/{treatmentid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Medication> createMedication(@RequestBody Medication medication,@PathVariable(value = "treatmentid") Long treatmentid){
        Treatment treatment = treatmentRepository.findById(treatmentid)
                .orElseThrow(() -> new TreatmentNotFoundException(treatmentid));
        medication.setTreatment(treatment);
        medicationRepository.save(medication);
        return new ResponseEntity<Medication>(medication, HttpStatus.OK);
    }

    @PutMapping("/medication/{medicationid}")
    public ResponseEntity<Medication> changeMedication(@RequestBody Medication medication,@PathVariable(value = "medicationid") Long medicationId){
        Medication medic = medicationRepository.findById(medicationId)
                .orElseThrow(() -> new MedicationNotFoundException(medicationId));
        medic.setRemark(medication.getRemark());
        medicationRepository.save(medic);
        return new ResponseEntity<Medication>(medic, HttpStatus.OK);

    }
    @DeleteMapping( "/medication/{medicationid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteMedicationById (@PathVariable(value = "medicationid") Long medicationid) {
        medicationRepository.deleteMedicationById(medicationid);
        return new ResponseEntity<>(medicationid, HttpStatus.OK);
    }


}
