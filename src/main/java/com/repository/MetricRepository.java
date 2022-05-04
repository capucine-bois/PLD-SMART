package com.repository;

import com.model.Metric;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MetricRepository extends JpaRepository<Metric,Long> {
    Optional<List<Metric>> findByMedicalFile(MedicalFile metric);

    Optional<Metric> findById(Long id);

    Optional<Metric> findByMedicalFileAndName(MedicalFile medicalFile, String name);

    void deleteMetricById(Long id);

}