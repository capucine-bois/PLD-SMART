package com.model;

import java.util.Date;

import javax.persistence.*;

//@Entity
//@Table(name="disease")


public class Disease {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="disease_id")
    private long diseaseId;

    @Column(name="name",length = 50)
    private String name;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Column(name="severity")
    private short severity;

    @ManyToOne
    @Column(name = "id_medical_file",nullable = false)
    private MedicalFile medicalFile;

    @Column(name="description",length = 50)
    private String description;

    public Disease(long diseaseId) {
        this.diseaseId = diseaseId;
    }

    @Override
    public java.lang.String toString() {
        return "Disease{" +
                "diseaseId=" + diseaseId +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", severity=" + severity +
                ", medicalFile=" + medicalFile +
                ", description='" + description + '\'' +
                '}';
    }
}
