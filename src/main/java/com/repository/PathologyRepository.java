package com.repository;

import com.model.Pathology;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PathologyRepository extends JpaRepository<Pathology,Long> {
    Optional<List<Pathology>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Pathology> findById(Long id);

    void deletePathologyById(Long id);

}