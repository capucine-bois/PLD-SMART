package com.repository;

import com.model.Equipment;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Long> {
    Optional<List<Equipment>> findByMedicalFile(MedicalFile medicalFile);

    Optional<Equipment> findById(Long id);

    void deleteEquipmentById(Long id);

}