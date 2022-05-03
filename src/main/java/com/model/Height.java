package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="height")


public class Height {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_height")
    private long id;

    @Column(name="value")
    private float value;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Height() {
    }

    public Height(float value, MedicalFile medicalFile) {
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }
}