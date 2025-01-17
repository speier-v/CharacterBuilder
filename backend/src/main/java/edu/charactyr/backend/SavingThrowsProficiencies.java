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
@Table(name="saving_throws_proficiencies")
public class SavingThrowsProficiencies {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private boolean strengthSave;
    private boolean dexteritySave;
    private boolean constitutionSave;
    private boolean intelligenceSave;
    private boolean wisdomSave;
    private boolean charismaSave;

    @OneToOne(mappedBy = "savingThrowsProficiencies")
    @JsonBackReference
    private Character character;
}
