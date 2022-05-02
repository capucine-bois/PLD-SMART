package com.model;


import com.model.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="treatment")
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_treatment")
    private long treatmentId;

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
    private int quantity;

    @Column(name="remark")
    private String remark;

    @ManyToOne
    //@Column(name="id_user",nullable=false)
    private User user;

    public Treatment(String name, Date start_date, Date end_date, int numFrequency, String unitFrequency, int quantity, String remark, User user){
        this.name = name;
        this.startDate = start_date;
        this.endDate = end_date;
        this.numFrequency = numFrequency;
        this.unitFrequency = unitFrequency;
        this.quantity = quantity;
        this.remark = remark;
        this.user = user;
    }

    public Treatment() {

    }

    public long getID() {
        return treatmentId;
    }

    public void setId(long id){
        this.treatmentId=id;
    }

    public void setUser(User user) {this.user = user;}

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

    public int getQuantity() {return quantity;}

    public void setQuantity(int quantity) {this.quantity = quantity;}

    public String getRemark() {return remark;}

    public void setRemark(String remark) {this.remark = remark;}

    @Override
    public String toString() {
        return "Treatment{" +
                "treatmentId=" + treatmentId +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", numFrequency=" + numFrequency +
                ", unitFrequency='" + unitFrequency + '\'' +
                ", quantity='" + quantity + '\'' +
                ", commentary='" + remark + '\'' +
                ", user=" + user +
                '}';
    }
}
