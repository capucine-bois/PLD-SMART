package com.repository;

import com.model.Treatment;
import com.model.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MedicationRepository extends JpaRepository<Medication,Long> {
    Optional<List<Medication>> findByTreatment(Treatment treatment);
    Optional<Medication> findById(Long id);
    void deleteMedicationById(Long id);

}
