package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByToken(String token);
    Optional<User> findByName(String name);
    Optional<User> findById(Long userid);

}

