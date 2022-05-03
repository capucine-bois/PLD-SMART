package com.controller;

import com.model.Measure;
import com.model.Metric;
import com.model.User;
import com.repository.MeasureRepository;
import com.repository.MetricRepository;
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
public class MeasureController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MeasureController.class);

    private UserRepository userRepository;
    private MetricRepository metricRepository;
    private MeasureRepository measureRepository;

    @Autowired
    MeasureController(final UserRepository userRepository, final MetricRepository metricRepository, final MeasureRepository measureRepository) {
        this.userRepository = userRepository;
        this.metricRepository = metricRepository;
        this.measureRepository = measureRepository;
    }

    @GetMapping("/measure/metric/{metricid}")
    @ResponseBody
    public ResponseEntity<List<Measure>> getMeasureyByMetric(@PathVariable(value = "metricid") Long metricid){

        Metric metric = metricRepository.findById(metricid)
                .orElseThrow(() -> new MetricNotFoundException(metricid));

        List<Measure> listMeasure = measureRepository.findByMetric(metric)
                .orElseThrow(() -> new MeasureNotFoundException(metric));

        return new ResponseEntity<List<Measure>>(listMeasure, HttpStatus.OK);
    }

    @PutMapping("/measure/{metricid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Measure> createMeasure(@RequestBody Measure measure,@PathVariable(value = "metricid") Long metricid){
        Metric metric = metricRepository.findById(metricid)
                .orElseThrow(() -> new MetricNotFoundException(metricid));

        measure.setMetric(metric);
        measureRepository.save(measure);

        return new ResponseEntity<Measure>(measure, HttpStatus.OK);
    }

    @DeleteMapping( "/measure/{measureid}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Long> deleteMeasureById (@PathVariable(value = "measureid") Long measureid) {
        measureRepository.deleteMeasureById(measureid);
        return new ResponseEntity<>(measureid, HttpStatus.OK);
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