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


    @Column(name="weight")
    private float weight;


    @Column(name="height")
    private float height;



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


    public MedicalFile() {
    }

    public MedicalFile(float weight, float height) {
        this.weight = weight;
        this.height = height;
    }

    public long getMedicalId() {
        return medicalId;
    }

    public void setMedicalId(long medicalId) {
        this.medicalId = medicalId;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
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
                ", weight=" + weight +
                ", height=" + height +
                ", user=" + user +
                ", allergies=" + allergies +
                ", pathologies=" + pathologies +
                '}';
    }
}
