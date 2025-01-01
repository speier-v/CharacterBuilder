package edu.charactyr.backend;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @Bean
  CommandLineRunner init(CharactyrRepository repository) {
      return args -> {
        /*  
        String[] names = {"John", "Julie", "Jennifer", "Helen", "Rachel"};
          for (int i = 0; i < names.length; i++) {
              String name = names[i];
              Users user = new Users(i+1, name, name.toLowerCase() + "@domain.com");
              userRepository.save(user);
          }
          */

          Character character = new Character();
          character.setName("Aragorn");
          character.setCharacterClass("Ranger");
          character.setLevel(5);
          character.setArmorClass(16);
          character.setHitPoints(45);
          character.setInitiative(2);
          character.setSpeed(30);
          character.setPassivePerception(14);
          character.setProficiencyBonus(3);
          character.setPlayerName("John Doe");

          Abilities abilities = new Abilities();
          abilities.setStrength(16);
          abilities.setDexterity(14);
          abilities.setConstitution(15);
          abilities.setIntelligence(10);
          abilities.setWisdom(12);
          abilities.setCharisma(13);
          abilities.setCharacter(character);

          SavingThrows savingThrows = new SavingThrows();
          savingThrows.setStrengthSave(0);
          savingThrows.setCharismaSave(0);
          savingThrows.setConstitutionSave(0);
          savingThrows.setDexteritySave(0);
          savingThrows.setIntelligenceSave(0);
          savingThrows.setWisdomSave(0);
          savingThrows.setCharacter(character);

          Skills skills = new Skills();

          Feature f1 = new Feature();
          f1.setDescription("example f1");
          f1.setFeatureLevel(1);
          f1.setName("Ex f1");
          Feature f2 = new Feature();
          f2.setDescription("example f2");
          f2.setFeatureLevel(2);
          f2.setName("Ex f2");
          List<Feature> features = new ArrayList<Feature>();
          f1.setCharacter(character);
          f2.setCharacter(character);
          features.add(f1);
          features.add(f2);

          Spell s1 = new Spell();
          s1.setLevel(1);
          s1.setName("example s1");
          s1.setPrepared(false);
          Spell s2 = new Spell();
          s2.setLevel(2);
          s2.setName("example s2");
          s2.setPrepared(true);
          List<Spell> spells = new ArrayList<Spell>();
          s1.setCharacter(character);
          s2.setCharacter(character);
          spells.add(s1);
          spells.add(s2);

          skills.setCharacter(character);
          character.setAbilities(abilities);
          character.setSavingThrows(savingThrows);
          character.setSkills(skills);
          character.setFeatures(features);
          character.setSpells(spells);

          repository.save(character);

          //repository.findAll().forEach(System.out::println);
      };
  }
}
