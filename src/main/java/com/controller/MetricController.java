package com.controller;

import com.model.Metric;
import com.model.MedicalFile;
import com.model.User;
import com.repository.MetricRepository;
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
public class MetricController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MetricController.class);

    private UserRepository userRepository;
    private MedicalFileRepository medicalFileRepository;
    private MetricRepository metricRepository;

    @Autowired
    MetricController(final UserRepository userRepository, final MedicalFileRepository medicalFileRepository, final MetricRepository metricRepository) {
        this.userRepository = userRepository;
        this.medicalFileRepository = medicalFileRepository;
        this.metricRepository = metricRepository;
    }

    @GetMapping("/metric/user/{usertoken}")
    @ResponseBody
    public ResponseEntity<List<Metric>> getMetricsByUser(@PathVariable(value = "usertoken") String usertoken){

        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        List<Metric> listMetric = metricRepository.findByMedicalFile(medicalFile)
                .orElseThrow(() -> new AllergyNotFoundException(medicalFile));

        return new ResponseEntity<List<Metric>>(listMetric, HttpStatus.OK);
    }

    @PutMapping("/metric/{usertoken}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Metric> createMetric(@RequestBody Metric metric,@PathVariable(value = "usertoken") String usertoken){
        User user = userRepository.findByToken(usertoken)
                .orElseThrow(() -> new UserNotFoundException(usertoken));

        MedicalFile medicalFile = medicalFileRepository.findByUser(user)
                .orElseThrow(() -> new MedicalFileNotFoundException(user));

        metric.setMedicalFile(medicalFile);
        metricRepository.save(metric);

        return new ResponseEntity<Metric>(metric, HttpStatus.OK);
    }

    @DeleteMapping( "/metric/{metricid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteMetricById (@PathVariable(value = "metricid") Long metricid) {
        metricRepository.deleteMetricById(metricid);
        return new ResponseEntity<>(metricid, HttpStatus.OK);
    }

/*
    @PostMapping("/metric/{allergyid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Metric> modifyMetricById (@RequestBody Metric modifiedMetric,@PathVariable(value = "allergyid") Long allergyid) {
        Allergy allergyToModify = allergyRepository.getById(allergyid);
        allergyToModify.setDescription(modifiedAllergy.getDescription());
        allergyToModify.setType(modifiedAllergy.getType());
        allergyToModify.setName(modifiedAllergy.getName());
        allergyRepository.save(allergyToModify);
        return new ResponseEntity<Allergy>(allergyToModify, HttpStatus.OK);
    }*/
}