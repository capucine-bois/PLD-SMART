package com.repository;

import com.model.Measure;
import com.model.Metric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MeasureRepository extends JpaRepository<Measure,Long> {
    Optional<List<Measure>> findByMetric(Metric metric);

    Optional<Measure> findById(Long id);

    void deleteMeasureById(Long id);

}