package com.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="medical_file")
public class MedicalFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_medical_file")
    private long medicalId;


    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Allergy> allergies;


    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Pathology> pathologies;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Vaccine> vaccines;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Equipment> equipments;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Metric> metrics;

    public MedicalFile() {
    }

    public List<Metric> getMetrics() {
        return metrics;
    }

    public void setMetrics(List<Metric> metrics) {
        this.metrics = metrics;
    }

    public List<Equipment> getEquipments() {
        return equipments;
    }

    public void setEquipments(List<Equipment> equipments) {
        this.equipments = equipments;
    }

    public List<Vaccine> getVaccines() {
        return vaccines;
    }

    public void setVaccines(List<Vaccine> vaccines) {
        this.vaccines = vaccines;
    }

    public long getMedicalId() {
        return medicalId;
    }

    public void setMedicalId(long medicalId) {
        this.medicalId = medicalId;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Allergy> getAllergies() {
        return allergies;
    }

    public void setAllergies(List<Allergy> allergies) {
        this.allergies = allergies;
    }

    public List<Pathology> getPathologies() {
        return pathologies;
    }

    public void setPathologies(List<Pathology> pathologies) {
        this.pathologies = pathologies;
    }

    @Override
    public String toString() {
        return "MedicalFile{" +
                "medicalId=" + medicalId +
                ", user=" + user +
                ", allergies=" + allergies +
                ", pathologies=" + pathologies +
                ", vaccines=" + vaccines +
                ", metrics=" + metrics +
                '}';
    }
}
