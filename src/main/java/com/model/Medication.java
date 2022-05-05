package com.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.model.User;

import javax.persistence.*;
import java.util.Date;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_medication")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name="end_date")
    private Date endDate;

    @Column(name = "num_intakes_per_day")
    private int numIntakesPerDay;

    @Column(name = "quantity_per_intakes", length=50)
    private String quantityPerIntakes;

    @Column(name = "time_between_intakes")
    private int timeBetweenIntakes;

    @Column(name="remark")
    private String remark;

    @ManyToOne
    @JoinColumn(name="id_treatment",nullable=false, referencedColumnName = "id_treatment")
    @JsonBackReference
    private Treatment treatment;

    public Medication() {

    }

    public Medication(long id, String name, Date startDate, Date endDate, int numIntakesPerDay, String quantityPerIntakes, int timeBetweenIntakes, String remark, Treatment treatment) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numIntakesPerDay = numIntakesPerDay;
        this.quantityPerIntakes = quantityPerIntakes;
        this.timeBetweenIntakes = timeBetweenIntakes;
        this.remark = remark;
        this.treatment = treatment;
        this.unit=unit;
    }


    public void setId(long id){
        this.id=id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate){
        this.startDate=startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate){
        this.endDate=endDate;
    }


    public String getRemark() {return remark;}

    public void setRemark(String remark) {this.remark = remark;}

    public long getId() {
        return id;
    }

    public Treatment getTreatment() {
        return treatment;
    }

    public void setTreatment(Treatment treatment) {
        this.treatment = treatment;
    }

    public int getNumIntakesPerDay() {
        return numIntakesPerDay;
    }

    public void setNumIntakesPerDay(int numIntakesPerDay) {
        this.numIntakesPerDay = numIntakesPerDay;
    }

    public String getQuantityPerIntakes() {
        return quantityPerIntakes;
    }

    public void setQuantityPerIntakes(String quantityPerIntakes) {
        this.quantityPerIntakes = quantityPerIntakes;
    }

    public int getTimeBetweenIntakes() {
        return timeBetweenIntakes;
    }

    public void setTimeBetweenIntakes(int timeBetweenIntakes) {
        this.timeBetweenIntakes = timeBetweenIntakes;
    }
}
