package com.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="users")


public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", unique = true, nullable = false)
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="surname",length = 50)
    private String surname;

    @Temporal(TemporalType.DATE)
    @Column(name="birth_date")
    private Date birthDate;

    @Column(name="sexe")
    private short sexe;

    @OneToOne
    @JoinColumn(name = "id_medical_file", referencedColumnName = "id_medical_file")
    @JsonManagedReference
    private MedicalFile medicalFile;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<RendezVous> rendezVous;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference(value="user-treatment")
    private List<Treatment> treatments;

    @Column(name="token", length = 50,unique = true)
    private String token;

    public List<RendezVous> getRendezVous() {
        return rendezVous;
    }

    public void setRendezVous(List<RendezVous> rendezVous) {
        this.rendezVous = rendezVous;
    }
    
    public User(){

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public short getSexe() {
        return sexe;
    }

    public void setSexe(short sexe) {
        this.sexe = sexe;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public List<Treatment> getTreatments() {
        return treatments;
    }

    public void setTreatments(List<Treatment> treatments) {
        this.treatments = treatments;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", birthDate=" + birthDate +
                ", sexe=" + sexe +
                ", medicalFile=" + medicalFile +
                ", rendezVous=" + rendezVous +
                ", treatments=" + treatments +
                ", token='" + token + '\'' +
                '}';
    }
}
