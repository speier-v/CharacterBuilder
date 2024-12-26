package edu.charactyr.backend;

import jakarta.persistence.Entity;
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
@Table(name = "charactyr_skills")
public class CharactyrSkills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @OneToOne
    @JoinColumn(name="charactyr_base_stats_id")
    private CharactyrBaseStats usedStat;
    
    @OneToOne
    @JoinColumn(name="charactyr_skill_proficiencies_id")
    private CharactyrSkillProficiencies proficiency;
    private int bonus;
    private String name;
    //private boolean proficiency;

    // Charakter A
    // Dexterity: 20
    // Acrobatics
    //  benutzt: Dexterity
    //  hat/hat nicht: Proficiency
    //  Bonus: Dexterity(20-10/2)+Proficiency
}
