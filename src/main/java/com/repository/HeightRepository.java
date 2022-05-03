package com.repository;

import com.model.Height;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HeightRepository extends JpaRepository<Height,Long> {
    Optional<List<Height>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Height> findById(Long id);

    void deleteHeightById(Long id);

}