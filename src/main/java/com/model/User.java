package com.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;

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

    @Column(name="token", length = 50,unique = true)
    private String token;

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
}
