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

    public Medication(long medicationId, String name, short countShot, int interval, String description, String unityMedication, Treatment treatment) {
        this.medicationId = medicationId;
        this.name = name;
        this.countShot = countShot;
        this.interval = interval;
        this.description = description;
        this.unityMedication = unityMedication;
        this.treatment = treatment;
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

    public short getCountShot() {
        return countShot;
    }

    public void setCountShot(short countShot) {
        this.countShot = countShot;
    }

    public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnityMedication() {
        return unityMedication;
    }

    public void setUnityMedication(String unityMedication) {
        this.unityMedication = unityMedication;
    }

    public Treatment getTreatment() {
        return treatment;
    }

    public void setTreatment(Treatment treatment) {
        this.treatment = treatment;
    }

    @Override
    public java.lang.String toString() {
        return "Medication{" +
                "medicationId=" + medicationId +
                ", name='" + name + '\'' +
                ", countShot=" + countShot +
                ", interval=" + interval +
                ", description='" + description + '\'' +
                ", unityMedication='" + unityMedication + '\'' +
                ", treatment=" + treatment +
                '}';
    }
}
