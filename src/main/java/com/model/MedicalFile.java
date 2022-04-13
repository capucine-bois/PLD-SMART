package com.model;


import javax.persistence.*;

@Entity
@Table(name="medical_file")
public class MedicalFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_medical_file")
    private long medicalId;

    @Column(name="height",precision=3, scale=2, nullable=true)
    private float height;

    @Column(name="weight", precision=4,scale=1, nullable=true)
    private float weight;

    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User user;

    /**
    @OneToMany
    @Column(name="id_allergy",nullable=false)
    private Allergy allergy;

    @OneToMany
    @Column(name="id_disease",nullable=false)
    private Disease disease;*/



}
