package com.repository;

import com.model.Vaccine;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VaccineRepository extends JpaRepository<Vaccine,Long> {
    Optional<List<Vaccine>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Vaccine> findById(Long id);

    void deleteVaccineById(Long id);

}