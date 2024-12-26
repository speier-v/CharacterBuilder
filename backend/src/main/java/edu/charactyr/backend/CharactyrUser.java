package edu.charactyr.backend;

import jakarta.persistence.CascadeType;
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
@Table(name = "charactyr_users")
public class CharactyrUser {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="charactyr_base_stats_id")
    private CharactyrBaseStats stats;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="charactyr_additional_stats_id")
    private CharactyrAdditionalStats additionalStats;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="charactyr_saving_throw_proficiencies_id")
    private CharactyrSavingThrowProficiencies savingThrowProficiencies;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="charactyr_skill_proficiencies_id")
    private CharactyrSkillProficiencies skillProficiencies;

    private String name;
    private int level;
    private String charactyrClass;
    private String icon;
    private String visibilty;
    private boolean canCastSpells;
    
    CharactyrUser() {}
}
