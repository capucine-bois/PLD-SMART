package com.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.model.User;

import javax.persistence.*;
import java.util.Date;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="equipment")
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_equipment")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="description")
    private String description;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name="end_date")
    private Date endDate;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Equipment() {
    }

    public Equipment(String name, String description, Date startDate, MedicalFile medicalFile) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.medicalFile = medicalFile;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }


}
