package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

import javax.persistence.*;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="allergy")


public class Allergy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_allergy")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="type")
    private String type;

    @Column(name="description")
    private String description;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Allergy(long allergyId, String name, String type, MedicalFile medicalFile) {
        this.id = allergyId;
        this.name = name;
        this.type = type;
        this.medicalFile = medicalFile;
    }

    public Allergy() {

    }

    public Allergy(long allergyId, String name, String type, String description, MedicalFile medicalFile) {
        this.id = allergyId;
        this.name = name;
        this.type = type;
        this.description = description;
        this.medicalFile = medicalFile;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getAllergyId() {
        return id;
    }

    public String getName() {
        return name;
    }



    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setAllergyId(long allergyId) {
        this.id = allergyId;
    }

    public void setName(String name) {
        this.name = name;
    }



    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }


}
