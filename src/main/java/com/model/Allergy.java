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

}
