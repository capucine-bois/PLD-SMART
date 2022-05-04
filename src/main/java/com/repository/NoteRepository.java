package com.repository;

import com.model.Note;
import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {

    List<Note> findAllByStateAndUser(String state,User user);
    List<Note> findAllByDateAfterAndUser(Date date,User user);
    List<Note> findAllByDateAfterAndStateAndUser(Date date, String state,User user);
    List<Note> findAllByUser(User user);
}