package com.model;


import com.model.User;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Table(name="treatment")
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="treatment_id")
    private long treatmentId;

    @Column(name="name",length = 50)
    private String name;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name="end_date")
    private Date endDate;

    @Column(name="category",length = 50)
    private String category;

    @ManyToOne
    @Column(name="id_user",nullable=false)
    private User user;

    public Treatment(String name, Date start_date, Date end_date, String category, User user){
        this.name = name;
        this.startDate = start_date;
        this.endDate = end_date;
        this.category = category;
        this.user = user;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category){
        this.category=category;
    }


    @Override
    public String toString() {
        return "Traitement [id = "+ treatmentId +", nom = "+name+", date de début = "+startDate+", date de fin = "+endDate+", catégorie = "+category+"]";
    }

}
