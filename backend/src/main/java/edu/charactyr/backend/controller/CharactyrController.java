package edu.charactyr.backend.controller;

import edu.charactyr.backend.Character;
import edu.charactyr.backend.CharactyrRepository;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(
    origins = {
      "https://localhost",
      "https://localhost:4200",
      "http://localhost:4200",
      "https://localhost:8080",
      "http://localhost:8080",
      "http://localhost:8090",
      "https://localhost:8090"
    })
@RequestMapping("/characters")
public class CharactyrController {
  private final CharactyrRepository repository;

  CharactyrController(CharactyrRepository repository) {
    this.repository = repository;
  }

  @GetMapping
  public List<Character> getCharacters() {
    return (List<Character>) repository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Character> getCharacterById(@PathVariable Long id) {
    return repository
        .findById(id)
        .map(character -> ResponseEntity.ok().body(character))
        .orElse(ResponseEntity.notFound().build());
  }

  @GetMapping("/search/by-name")
  public List<Character> getCharactersByName(@RequestParam String name) {
    return repository.findByNameContainingIgnoreCase(name);
  }

  @GetMapping("/search/by-player-name")
  public List<Character> getCharactersByPlayerName(@RequestParam String playerName) {
    return repository.findByPlayerNameContainingIgnoreCase(playerName);
  }

  @PostMapping
  public ResponseEntity<Character> addCharacter(@RequestBody Character character) {
    Character savedCharacter = repository.save(character);
    return ResponseEntity.ok(savedCharacter);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Character> updateCharacter(
      @PathVariable Long id, @RequestBody Character updatedCharacter) {
    return repository
        .findById(id)
        .map(
            existingCharacter -> {
              updatedCharacter.setId(id);
              Character savedCharacter = repository.save(updatedCharacter);
              return ResponseEntity.ok(savedCharacter);
            })
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> deleteCharacter(@PathVariable Long id) {
    return repository
        .findById(id)
        .map(
            character -> {
              repository.delete(character);
              return ResponseEntity.ok().build();
            })
        .orElse(ResponseEntity.notFound().build());
  }

  @GetMapping("/search/by-visibility")
  public List<Character> getCharactersByVisibility(
      @RequestParam String visibility, @RequestParam(required = false) String playerName) {
    if ("public".equalsIgnoreCase(visibility)) {
      return repository.findByVisibilityIgnoreCase("public");
    } else if ("private".equalsIgnoreCase(visibility) && playerName != null) {
      List<Character> privateChars =
          repository.findByVisibilityIgnoreCaseAndPlayerNameIgnoreCase("private", playerName);
      List<Character> publicChars =
          repository.findByVisibilityIgnoreCaseAndPlayerNameIgnoreCase("public", playerName);
      privateChars.addAll(publicChars);
      return privateChars;
    } else {
      return List.of();
    }
  }
}
