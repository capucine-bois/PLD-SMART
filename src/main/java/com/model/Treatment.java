package com.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.model.User;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="treatment")
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_treatment")
    private long id;

    @Column(name="name",length = 50)
    private String name;

    @Column(name="remark")
    private String remark;

    @OneToMany(mappedBy = "treatment")
    @JsonManagedReference
    private List<Medication> medications;
    @ManyToOne
    @JoinColumn(name="id_user",nullable=false, referencedColumnName = "id_user")
    @JsonBackReference(value="user-treatment")
    private User user;

    @OneToOne
    @JoinColumn(name = "id_pathology", referencedColumnName = "id_pathology")
    @JsonBackReference
    private Pathology pathology;

    public Treatment() {

    }

    public Treatment(String name, String remark, List<Medication> medications, User user) {
        this.name = name;
        this.remark = remark;
        this.medications = medications;
        this.user = user;
        this.pathology = pathology;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public List<Medication> getMedications() {
        return medications;
    }

    public void setMedications(List<Medication> medications) {
        this.medications = medications;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Pathology getPathology() {
        return pathology;
    }

    public void setPathology(Pathology pathology) {
        this.pathology = pathology;
    }


}
