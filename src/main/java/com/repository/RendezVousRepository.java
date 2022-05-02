package com.repository;

import com.model.Allergy;
import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import com.model.User;
import com.model.RendezVous;

@Repository
public interface RendezVousRepository extends JpaRepository<RendezVous,Long> {
    Optional<List<RendezVous>> findByUser(User user);

    Optional<RendezVous> findById(Long id);
    void deleteRendezVousById(Long id);

}