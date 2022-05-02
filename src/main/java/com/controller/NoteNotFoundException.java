package com.controller;

import com.model.Note;

public class NoteNotFoundException extends RuntimeException {

    NoteNotFoundException(Long idNote){
        super("Could not find user " + idNote);
    }
}
