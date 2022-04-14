package com.model;


import com.model.User;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Table(name="rendezVous")
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="rendezVous_id")
    private long medicationId;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="type_practitioner",length = 50)
    private String typePractitioner;

    @Column(name="name_practitioner",length = 50)
    private String namePractitioner;

    @Temporal(TemporalType.DATE)
    @Column(name="date")
    private Date date;

    @Column(name="location",length = 50)
    private String location;

    @ManyToOne
    @Column(name="id_user",nullable=false)
    private User user;

    public RendezVous(String name, String typePractitioner, String namePractitioner, Date date, String location, User user){
        this.name = name;
        this.typePractitioner = typePractitioner;
        this.namePractitioner = namePractitioner;
        this.date = date;
        this.location = location;
        this.user = user;
    }

    public long getMedicationId() {
        return medicationId;
    }

    public void setMedicationId(long medicationId) {
        this.medicationId = medicationId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTypePractitioner() {
        return typePractitioner;
    }

    public void setTypePractitioner(String typePractitioner) {
        this.typePractitioner = typePractitioner;
    }

    public String getNamePractitioner() {
        return namePractitioner;
    }

    public void setNamePractitioner(String namePractitioner) {
        this.namePractitioner = namePractitioner;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public java.lang.String toString() {
        return "RendezVous{" +
                "medicationId=" + medicationId +
                ", name='" + name + '\'' +
                ", typePractitioner='" + typePractitioner + '\'' +
                ", namePractitioner='" + namePractitioner + '\'' +
                ", date=" + date +
                ", location='" + location + '\'' +
                ", user=" + user +
                '}';
    }
}
