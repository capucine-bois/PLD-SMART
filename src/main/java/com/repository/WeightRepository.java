package com.repository;

import com.model.Weight;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WeightRepository extends JpaRepository<Weight,Long> {
    Optional<List<Weight>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Weight> findById(Long id);

    void deleteWeightById(Long id);

}