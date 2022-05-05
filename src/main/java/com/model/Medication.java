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

    @Column(name="num_frequency")
    private int numFrequency;

    @Column(name="unit_frequency")
    private String unitFrequency;

    @Column(name="quantity")
    private float quantity;

    @Column(name="unit")
    private String unit;

    @Column(name="remark")
    private String remark;

    @ManyToOne
    @JoinColumn(name="id_treatment",nullable=false, referencedColumnName = "id_treatment")
    @JsonBackReference
    private Treatment treatment;

    public Medication(String name, Date start_date, Date end_date, int numFrequency, String unitFrequency, int quantity, String remark, Treatment treatment, String unit){
        this.name = name;
        this.startDate = start_date;
        this.endDate = end_date;
        this.numFrequency = numFrequency;
        this.unitFrequency = unitFrequency;
        this.quantity = quantity;
        this.remark = remark;
        this.treatment = treatment;
        this.unit=unit;
    }

    public Medication() {

    }



    public void setId(long id){
        this.id=id;
    }


    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
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

    public int getNumFrequency() {return numFrequency;    }

    public void setNumFrequency(int numFrequency) {this.numFrequency = numFrequency;}

    public String getUnitFrequency() {return unitFrequency;}

    public void setUnitFrequency(String unitFrequency) {this.unitFrequency = unitFrequency;}

    public float getQuantity() {return quantity;}

    public void setQuantity(float quantity) {this.quantity = quantity;}

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

    @Override
    public String toString() {
        return "Treatment{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", numFrequency=" + numFrequency +
                ", unitFrequency='" + unitFrequency + '\'' +
                ", quantity=" + quantity +
                ", remark='" + remark + '\'' +
                ", treatment=" + treatment +
                ", unit=" + unit +
                '}';
    }
}
