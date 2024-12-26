package edu.charactyr.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="charactyr_additional_stats")
public class CharactyrAdditionalStats {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int proficiency;
    private int speed;
    private int armorClass;
    private int maxHP;
    private int passiveInsight;
    private int passivePerception;
    private int passiveInvestigation;
    private int initiative;

    CharactyrAdditionalStats() {}
}
