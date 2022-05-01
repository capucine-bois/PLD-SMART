package com.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.model.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="rendezVous")
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_rendez_vous")
    private long id;



    @Column(name="type_practitioner",length = 50)
    private String typePractitioner;

    @Column(name="name_practitioner",length = 50)
    private String namePractitioner;

    @Temporal(TemporalType.DATE)
    @Column(name="date")
    private Date date;

    @Column(name="location",length = 50)
    private String location;

    @Column(name="remark",length = 50)
    private String remark;

    @ManyToOne
    @JoinColumn(name="id_user",nullable=false, referencedColumnName = "id_user")
    @JsonBackReference
    private User user;

    public RendezVous(String typePractitioner, String namePractitioner, Date date, String location, User user){

        this.typePractitioner = typePractitioner;
        this.namePractitioner = namePractitioner;
        this.date = date;
        this.location = location;
        this.user = user;
    }

    public RendezVous(String typePractitioner, String namePractitioner, Date date, String location, User user, String remark){

        this.typePractitioner = typePractitioner;
        this.namePractitioner = namePractitioner;
        this.date = date;
        this.location = location;
        this.user = user;
        this.remark = remark;
    }

    public RendezVous() {
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public void setMedicationId(long id) {
        this.id = id;
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public java.lang.String toString() {
        return "RendezVous{" +
                "id=" + id +
                ", typePractitioner='" + typePractitioner + '\'' +
                ", namePractitioner='" + namePractitioner + '\'' +
                ", date=" + date +
                ", location='" + location + '\'' +
                ", user=" + user +
                '}';
    }
}
