package edu.charactyr.backend;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CharactyrRepository extends CrudRepository<Character, Long>{
    List<Character> findByNameContainingIgnoreCase(String name);
    List<Character> findByPlayerNameContainingIgnoreCase(String playerName);
    List<Character> findByVisibilityIgnoreCase(String visibility);
    List<Character> findByVisibilityIgnoreCaseAndPlayerNameIgnoreCase(String visibility, String playerName);
};