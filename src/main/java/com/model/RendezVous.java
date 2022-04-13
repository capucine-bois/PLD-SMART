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



}
