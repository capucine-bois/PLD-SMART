package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="metric")


public class Metric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_metric")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="unit")
    private String unit;

    @OneToMany(mappedBy = "metric")
    @JsonManagedReference
    private List<Measure> measure;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Metric() {
    }

    public Metric(String name, List<Measure> measure) {
        this.name = name;
        this.measure = measure;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Measure> getMeasure() {
        return measure;
    }

    public void setMeasure(List<Measure> measure) {
        this.measure = measure;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }


}