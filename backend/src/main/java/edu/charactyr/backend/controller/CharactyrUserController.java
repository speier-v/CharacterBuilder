package edu.charactyr.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.charactyr.backend.CharactyrUser;
import edu.charactyr.backend.CharactyrUserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CharactyrUserController {    
    private final CharactyrUserRepository userRepository;

    CharactyrUserController(CharactyrUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<CharactyrUser> getUsers() {
        return (List<CharactyrUser>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody CharactyrUser user) {
        userRepository.save(user);
    }
}

