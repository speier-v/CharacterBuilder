package edu.charactyr.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.charactyr.backend.CharactyrRepository;
import edu.charactyr.backend.Character;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CharactyrController {    
    private final CharactyrRepository repository;

    CharactyrController(CharactyrRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/characters")
    public List<Character> getCharacters() {
        return (List<Character>) repository.findAll();
    }

    @PostMapping("/characters")
    void addCharacter(@RequestBody Character character) {
        repository.save(character);
    }
}

