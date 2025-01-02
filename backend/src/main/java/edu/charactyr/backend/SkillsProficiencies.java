package edu.charactyr.backend;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="skills_proficiencies")
public class SkillsProficiencies {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private boolean acrobatics;
    private boolean animalHandling;
    private boolean arcana;
    private boolean athletics;
    private boolean deception;
    private boolean history;
    private boolean insight;
    private boolean intimidation;
    private boolean investigation;
    private boolean medicine;
    private boolean nature;
    private boolean perception;
    private boolean performance;
    private boolean persuasion;
    private boolean religion;
    private boolean sleightOfHand;
    private boolean stealth;
    private boolean survival;

    @OneToOne(mappedBy = "skillsProficiencies")
    @JsonBackReference
    private Character character;
}