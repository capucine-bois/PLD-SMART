package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

import javax.persistence.*;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="pathology")


public class Pathology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_pathology")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="severity",length = 50)
    private String severity;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Column(name="remark")
    private String remark;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Pathology(String name, String severity, Date startDate, String remark, MedicalFile medicalFile) {
        this.name = name;
        this.severity = severity;
        this.startDate = startDate;
        this.remark = remark;
        this.medicalFile = medicalFile;
    }

    public Pathology() {
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

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    @Override
    public String toString() {
        return "Pathology{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", severity='" + severity + '\'' +
                ", startDate=" + startDate +
                ", remark='" + remark + '\'' +
                ", medicalFile=" + medicalFile +
                '}';
    }
}
