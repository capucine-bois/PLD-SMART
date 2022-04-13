package com.model;


import javax.persistence.*;

//@Entity
//@Table(name="medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="medication_id")
    private long medicationId;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="count_shot", nullable=true)
    private short countShot;

    @Column(name="interval", nullable=true)
    private int interval;

    @Column(name="description",length = 50)
    private String description;

    @Column(name="unity_medication",length = 50)
    private String unityMedication;

    @ManyToOne
    @Column(name="id_treatment",nullable=false)
    private Treatment treatment;



}
