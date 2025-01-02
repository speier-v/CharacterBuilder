package edu.charactyr.backend;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "character")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    private String name;
    private String playerName;
    private String characterClass;
    private int level;
    private int hitPoints;
    private int armorClass;
    private int speed;
    private int initiative;
    private int proficiencyBonus;
    private int passivePerception;
    private String icon;
    private String visibility;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="abilities_id", referencedColumnName = "id")
    @JsonManagedReference
    private Abilities abilities;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="saving_throws_id", referencedColumnName = "id")
    @JsonManagedReference
    private SavingThrows savingThrows;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="saving_throws_proficiencies_id", referencedColumnName = "id")
    @JsonManagedReference
    private SavingThrowsProficiencies savingThrowsProficiencies;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="skills_id", referencedColumnName = "id")
    @JsonManagedReference
    private Skills skills;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="skills_proficiencies_id", referencedColumnName = "id")
    @JsonManagedReference
    private SkillsProficiencies skillsProficiencies;

    @OneToMany(mappedBy = "character", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Feature> features;

    @OneToMany(mappedBy = "character", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Spell> spells;
}