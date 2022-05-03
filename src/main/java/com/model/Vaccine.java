package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="vaccine")


public class Vaccine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_vaccine")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Temporal(TemporalType.DATE)
    @Column(name="last_booster")
    private Date lastBooster;

    @Column(name="lot")
    private String lot;

    @ManyToOne
    @JoinColumn(name="id_medical_file",nullable=false, referencedColumnName = "id_medical_file")
    @JsonBackReference
    private MedicalFile medicalFile;

    public Vaccine() {
    }

    public Vaccine(String name, Date lastBooster, String lot) {
        this.name = name;
        this.lastBooster = lastBooster;
        this.lot = lot;
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

    public Date getLastBooster() {
        return lastBooster;
    }

    public void setLastBooster(Date lastBooster) {
        this.lastBooster = lastBooster;
    }

    public String getLot() {
        return lot;
    }

    public void setLot(String lot) {
        this.lot = lot;
    }

    public MedicalFile getMedicalFile() {
        return medicalFile;
    }

    public void setMedicalFile(MedicalFile medicalFile) {
        this.medicalFile = medicalFile;
    }

    @Override
    public String toString() {
        return "Vaccine{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastBooster=" + lastBooster +
                ", lot='" + lot + '\'' +
                ", medicalFile=" + medicalFile +
                '}';
    }
}
