package com.model;

import java.util.Date;

import javax.persistence.*;

//@Entity
//@Table(name="allergy")


public class Allergy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="allergy_id")
    private long allergyId;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="severity")
    private short severity;

    @ManyToOne
    @Column(name = "id_medical_file",nullable = false)
    private MedicalFile medicalFile;

    public Allergy(long allergyId, String name, short severity, MedicalFile medicalFile) {
        this.allergyId = allergyId;
        this.name = name;
        this.severity = severity;
        this.medicalFile = medicalFile;
    }

    public long getAllergyId() {
        return allergyId;
    }

    public String getName() {
        return name;
    }

    public short getSeverity() {
        return severity;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setAllergyId(long allergyId) {
        this.allergyId = allergyId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSeverity(short severity) {
        this.severity = severity;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    @Override
    public java.lang.String toString() {
        return "Allergy{" +
                "allergyId=" + allergyId +
                ", name='" + name + '\'' +
                ", severity=" + severity +
                ", medicalFile=" + medicalFile +
                '}';
    }
}
