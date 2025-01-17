package edu.charactyr.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterService {

    private final CharactyrRepository characterRepository;

    @Autowired
    public CharacterService(CharactyrRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public Character saveCharacter(Character character) {
        return characterRepository.save(character);
    }
}