package com.repository;

import com.model.MedicalFile;
import com.model.RendezVous;
import com.model.Allergy;
import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AllergyRepository extends JpaRepository<Allergy,Long> {
    Optional<List<Allergy>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Allergy> findById(Long id);

    void deleteAllergyById(Long id);

}