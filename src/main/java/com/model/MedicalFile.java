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

    @Column(name="height",precision=3, scale=2, nullable=true)
    private float height;

    @Column(name="weight", precision=4,scale=1, nullable=true)
    private float weight;

    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Allergy> allergies;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Treatment> treatments;

    @OneToMany(mappedBy = "medicalFile")
    @JsonManagedReference
    private List<Pathology> pathologies;



    public MedicalFile() {
    }

    public MedicalFile(float height, float weight, User user) {
        this.height = height;
        this.weight = weight;
        this.user = user;
    }

    public List<Treatment> getTreatments() {
        return treatments;
    }

    public void setTreatments(List<Treatment> treatments) {
        this.treatments = treatments;
    }

    public MedicalFile(User user) {
        this.user = user;
    }

    public long getMedicalId() {
        return medicalId;
    }

    public void setMedicalId(long medicalId) {
        this.medicalId = medicalId;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public List<Allergy> getAllergies() {
        return allergies;
    }

    public void setAllergies(List<Allergy> allergies) {
        this.allergies = allergies;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public java.lang.String toString() {
        return "MedicalFile{" +
                "medicalId=" + medicalId +
                ", height=" + height +
                ", weight=" + weight +
                ", user=" + user +
                '}';
    }
}
