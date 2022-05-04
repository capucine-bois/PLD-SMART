package com.controller;

import com.model.Note;
import com.model.User;
import com.repository.NoteRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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

        if(note.getId() == -1) {
            note.setDate(new Date());
        }

        note.setUser(user);
        noteRepository.save(note);

        return new ResponseEntity<Note>(note, HttpStatus.OK);

    }

    @GetMapping("/notes/user/{token}/state/{state}/date/{date}")
    @ResponseBody
    public ResponseEntity<List<Note>> getAllNotesByStateAndDate(@PathVariable(value ="token") String token, @PathVariable(value="state") String state, @PathVariable(value="date") String date){

        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new UserNotFoundException(token));

        List<Note> notes;
        System.out.println(date);
        Date realDate = null;

        if(!date.equals("all")) {

            try {
                realDate = new SimpleDateFormat("mm-dd-yy").parse(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }

        if(!state.equals("all") && !date.equals("all")){
            notes = noteRepository.findAllByDateAfterAndStateAndUser(realDate,state,user);
        }
        else if(!state.equals("all")){
            notes = noteRepository.findAllByStateAndUser(state,user);
        }
        else if(!date.equals("all")){
            System.out.println("realDate : " + realDate);
            notes = noteRepository.findAllByDateAfterAndUser(realDate,user);
        }
        else{
            notes = noteRepository.findAllByUser(user);
        }

        return new ResponseEntity<List<Note>>(notes, HttpStatus.OK);
    }

    @DeleteMapping("/notes/id/{id}")
    @Transactional
    public void deleteNote(@PathVariable(value="id") Long idNote){
        noteRepository.deleteById(idNote);
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