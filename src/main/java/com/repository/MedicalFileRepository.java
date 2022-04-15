package com.repository;

import com.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.model.User;

@Repository
public interface MedicalFileRepository extends JpaRepository<MedicalFile,Long> {
    Optional<MedicalFile> findByUser(User user);
}