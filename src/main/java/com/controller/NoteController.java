package com.controller;

import com.model.Note;
import com.model.User;
import com.repository.NoteRepository;
import com.repository.UserRepository;
import com.util.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class NoteController {

    private NoteRepository noteRepository;
    private UserRepository userRepository;
    private SimpleDateFormat dateFormat;

    @Autowired
    NoteController(final NoteRepository noteRepository, final UserRepository userRepository) {
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
        dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    }


    @PutMapping("/notes/user/{token}")
    @ResponseBody
    @Transactional
    public ResponseEntity<Note> createNote(@PathVariable(value="token") String token, @RequestBody Note note){
        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));

        note.setDate(new Date());
        note.setUser(user);
        noteRepository.save(note);

        return new ResponseEntity<Note>(note, HttpStatus.OK);

    }


    @GetMapping("/notes/id/{id}")
    @ResponseBody
    public ResponseEntity<Note> getNote(@PathVariable(value = "id") Long idNote){

        Note note = noteRepository.findById(idNote)
                .orElseThrow(() -> new NoteNotFoundException(idNote));
        return new ResponseEntity<Note>(note, HttpStatus.OK);
    }

    @GetMapping("/notes/user/{token}")
    @ResponseBody
    public ResponseEntity<List<Note>> getAllNotes(@PathVariable(value = "token") String token){

        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));

        List<Note> notes = noteRepository.findAllByUser(user);

        return new ResponseEntity<List<Note>>(notes, HttpStatus.OK);
    }


}