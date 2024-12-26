package edu.charactyr.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "charactyr_saving_throw_proficiencies")
public class CharactyrSavingThrowProficiencies {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private boolean strength;
    private boolean dexterity;
    private boolean constitution;
    private boolean intelligence;
    private boolean wisdom;
    private boolean charisma;

    CharactyrSavingThrowProficiencies() {}
}
