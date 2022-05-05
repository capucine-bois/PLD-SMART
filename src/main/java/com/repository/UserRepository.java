package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

import com.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByToken(String token);
    Optional<User> findByName(String name);
    Optional<User> findById(Long userid);
    List<User> findAll();

}

