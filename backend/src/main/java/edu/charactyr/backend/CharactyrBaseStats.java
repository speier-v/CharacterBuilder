package edu.charactyr.backend;

import javax.annotation.processing.Generated;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "charactyr_base_stats")
public class CharactyrBaseStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private int dexterity;
    private int strenght;
    private int wisdom;
    private int intelligence;
    private int charisma;
    private int constitution;
    
    CharactyrBaseStats() {}
}
