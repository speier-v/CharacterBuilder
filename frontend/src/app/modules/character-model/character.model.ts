export interface Skill {
  name: string;
  description: string;
}

export interface ClassLevelSkills {
  level: number;
  skills: Skill[];
}

export interface ModelCharacterClass {
  className: string;
  description: string;
  levels: ClassLevelSkills[];
}

export const modelCharacterClasses: ModelCharacterClass[] = [
  {
    className: 'Fighter',
    description: `<strong>Fighters</strong> rule many battlefields. Questing knights, royal champions, elite soldiers, and hardened mercenaries—as Fighters, they all share an unparalleled prowess with weapons and armor. And they are well acquainted with death, both meting it out and defying it.<br>
                    Fighters master various weapon techniques, and a well-equipped Fighter always has the right tool at hand for any combat situation.<br>
                    Likewise, a Fighter is adept with every form of armor.<br>
                    Beyond that basic degree of familiarity, each Fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.<br>
                    This combination of broad ability and extensive specialization makes Fighters superior combatants.`,
    levels: [
      { level: 1, skills: [{ name: 'Strike', description: 'Basic melee attack' }] },
      { level: 1, skills: [{ name: 'Proficiencies', description: 'Choose 3 skill proficiencies.' }] },
      { level: 2, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
      { level: 3, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
      { level: 4, skills: [{ name: 'Ability Score Improvement', description: 'Choose which ability scores to augment with a +1' }] },
    ],
  },
  {
    className: 'Wizard',
    description: `<strong>Wizards</strong> are defined by their exhaustive study of magic’s inner workings. They cast spells of explosive fire, arcing lightning, subtle deception, and spectacular transformations. Their magic conjures monsters from other planes of existence, glimpses the future, or forms protective barriers. Their mightiest spells change one substance into another, call meteors from the sky, or open portals to other worlds.<br>
                    Most Wizards share a scholarly approach to magic. They examine the theoretical underpinnings of magic, particularly the categorization of spells into schools of magic.<br>
                    The closest a Wizard is likely to come to an ordinary life is working as a sage or lecturer. Other Wizards sell their services as advisers, serve in military forces, or pursue lives of crime or domination.<br>
                    But the lure of knowledge calls even the most unadventurous Wizards from the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most Wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.`,
    levels: [
      { level: 1, skills: [{ name: 'Magic Missile', description: 'Deals magic damage' }] },
      { level: 1, skills: [{ name: 'Proficiencies', description: 'Choose 3 skill proficiencies.' }] },
      { level: 2, skills: [{ name: 'Fireball', description: 'Deals area fire damage' }] },
      { level: 3, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
      { level: 4, skills: [{ name: 'Ability Score Improvement', description: 'Choose which ability scores to augment with a +1' }] },
    ],
  },
  {
    className: 'Rogue',
    description: `<strong>Rogues</strong> rely on cunning, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem. A few even learn magical tricks to supplement their other abilities.<br>
                    Many Rogues focus on stealth and deception, while others refine skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.<br>
                    In combat, Rogues prioritize subtle strikes over brute strength. They would rather make one precise strike than wear an opponent down with a barrage of blows.<br>
                    Some Rogues began their careers as criminals, while others used their cunning to fight crime. Whatever a Rogue’s relation to the law, no common criminal or officer of the law can match the subtle brilliance of the greatest Rogues.`,
    levels: [
      { level: 1, skills: [{ name: 'Sneak Attack', description: 'Deals extra damage from stealth' }] },
      { level: 1, skills: [{ name: 'Proficiencies', description: 'Choose 3 skill proficiencies.' }] },
      { level: 2, skills: [{ name: 'Evasion', description: 'Avoids damage once per round' }] },
      { level: 3, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
      { level: 3, skills: [{ name: 'Proficiencies', description: 'Choose 3 additional skill proficiencies.' }] },
      { level: 4, skills: [{ name: 'Ability Score Improvement', description: 'Choose which ability scores to augment with a +1' }] },
    ],
  },
];

export class IconImages {
  images: Array<String>;

  constructor() {
    this.images = [
      'character_frame_0.png',
      'character_frame_1.jpeg',
      'character_frame_2.jpeg',
      'character_frame_3.jpeg',
      'character_frame_4.jpeg',
      'character_frame_5.jpeg',
      'character_frame_6.jpeg',
      'character_frame_7.jpeg',
      'character_frame_8.jpeg'
    ];
  }
}

/* Proper Character Model */
export interface Abilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface SavingThrows {
  strengthSave: number;
  dexteritySave: number;
  constitutionSave: number;
  intelligenceSave: number;
  wisdomSave: number;
  charismaSave: number;
}

export interface SavingThrowsProficiencies {
  strengthSave: boolean;
  dexteritySave: boolean;
  constitutionSave: boolean;
  intelligenceSave: boolean;
  wisdomSave: boolean;
  charismaSave: boolean;
}

export interface Skills {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
}

export interface SkillsProficiencies {
  acrobatics: boolean;
  animalHandling: boolean;
  arcana: boolean;
  athletics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  persuasion: boolean;
  religion: boolean;
  sleightOfHand: boolean;
  stealth: boolean;
  survival: boolean;
}

export interface Feature {
  name: string;
  featureLevel: number;
  description: string;
}

export interface Spell {
  name: string;
  level: number;
  prepared: boolean;
}

export interface Character {
  name: string;
  playerName: string;
  characterClass: string;
  level: number;
  hitPoints: number;
  armorClass: number;
  speed: number;
  initiative: number;
  proficiencyBonus: number;
  passivePerception: number;
  abilities: Abilities;
  savingThrows: SavingThrows;
  skills: Skills;
  features: Feature[];
  spells: Spell[];
  icon: String;
  visibility: string;
}

export class Character implements Character {
  id: number;
  name: string;
  playerName: string;
  characterClass: string;
  level: number;
  hitPoints: number;
  armorClass: number;
  speed: number;
  initiative: number;
  proficiencyBonus: number;
  passivePerception: number;
  stats: Abilities;
  savingThrows: SavingThrows;
  savingThrowsProficiencies: SavingThrowsProficiencies;
  skills: Skills;
  skillsProficiencies: SkillsProficiencies;
  features: Feature[];
  spells: Spell[];
  icon: String;
  visibility: string;

  constructor(
    name: string,
    id: number,
  ) {
    this.id = id;
    this.name = name;
    this.playerName = 'playerName';
    this.characterClass = '';
    this.level = 1;
    this.hitPoints = 0; // calculated later
    this.armorClass = 0; // calculated later
    this.speed = 30;
    this.initiative = 0; // calculated later
    this.proficiencyBonus = 0; // calculated later
    this.passivePerception = 0; // calculated later
    this.stats = { 
      dexterity: 0,
      strength: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0,
      constitution: 0
    };
    this.savingThrows = { // calculate later
      strengthSave: 0,
      dexteritySave: 0,
      constitutionSave: 0,
      intelligenceSave: 0,
      wisdomSave: 0,
      charismaSave: 0
    }
    this.savingThrowsProficiencies = { // calculate later
      strengthSave: false,
      dexteritySave: false,
      constitutionSave: false,
      intelligenceSave: false,
      wisdomSave: false,
      charismaSave: false
    }
    // saving throws - depends on proficiencies and stats
    // skills - depends on proficiencies and stats
    this.skills = {
      acrobatics: 0,
      animalHandling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      sleightOfHand: 0,
      stealth: 0,
      survival: 0,
    }
    
    this.skillsProficiencies = {
      acrobatics: false,
      animalHandling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleightOfHand: false,
      stealth: false,
      survival: false,
    }
    // features - depends on class and level
    this.features = [
      {
        name: "example",
        featureLevel: 0,
        description: "Example description"
      }
    ];
    // spells - depends on class and level
    this.spells = [
      {
        name: "example spell",
        level: 0,
        prepared: false
      }
    ];

    this.icon = new IconImages().images[0];
    this.visibility = 'private';

    this.calculateStats();
  }

  calculateStats() : void {
    this.calculateProficiency(this.level);
    this.calculateArmorClass();
    this.calculateMaxHP();
    this.calculateInitiative();
    this.passivePerception = this.calculatePassiveSkill(this.abilities.wisdom, this.proficiencyBonus, false);
    //this.calculateSavingThrows(this.proficiencyBonus);
    //this.calculateSkills();
  }

  calculateProficiency(level: number): void {
    this.proficiencyBonus = Math.floor((level - 1) / 4) + 2;
  }

  calculateArmorClass(): void {
    const baseArmor = 10;
    const dexModifier = this.calculateModifier(this.stats.dexterity);
    this.armorClass = baseArmor + dexModifier;
  }

  calculateMaxHP(): void {
    // TODO: change hitDie depending on class, Fighter > Rogue > Wizard
    const hitDie = 10;
    const conModifier = this.calculateModifier(this.stats.constitution);
    this.hitPoints = hitDie + (this.level - 1) * (Math.floor(hitDie / 2) + 1 + conModifier);
  }

  calculateInitiative(): void {
    this.initiative = this.calculateModifier(this.stats.dexterity);
  }

  /*
  calculateSavingThrows(proficiencyBonus: number): void {
    this.savingThrows = {
      strength: this.calculateSavingThrow(
        this.stats.strength ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.strength
      ),
      dexterity: this.calculateSavingThrow(
        this.stats.dexterity ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.dexterity
      ),
      constitution: this.calculateSavingThrow(
        this.stats.constitution ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.constitution
      ),
      intelligence: this.calculateSavingThrow(
        this.stats.intelligence ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.intelligence
      ),
      wisdom: this.calculateSavingThrow(
        this.stats.wisdom ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.wisdom
      ),
      charisma: this.calculateSavingThrow(
        this.stats.charisma ?? 0,
        proficiencyBonus,
        this.savingThrowProficiencies.charisma
      ),
    };
  }

  calculateSavingThrow(
    abilityScore: number,
    proficiencyBonus: number,
    isProficient: boolean
  ): number {
    const abilityModifier = this.calculateModifier(abilityScore);
    return abilityModifier + (isProficient ? proficiencyBonus : 0);
  }

  calculateSkillBonus(
    abilityScore: number | null,
    proficiencyBonus: number,
    isProficient: boolean
  ): number {
    const abilityModifier = this.calculateModifier(abilityScore ?? 0);
    return abilityModifier + (isProficient ? proficiencyBonus : 0);
  }
  */

  /*
  calculateSkills(): void {  
    this.skills = {
      acrobatics: {
        ability: 'dexterity',
        proficient: this.skillProficiencies.acrobatics,
        bonus: this.calculateSkillBonus(
          this.stats.dexterity,
          proficiencyBonus,
          this.skillProficiencies.acrobatics
        ),
      },
      animalHandling: {
        ability: 'wisdom',
        proficient: this.skillProficiencies.animalHandling,
        bonus: this.calculateSkillBonus(
          this.stats.wisdom,
          proficiencyBonus,
          this.skillProficiencies.animalHandling
        ),
      },
      arcana: {
        ability: 'intelligence',
        proficient: this.skillProficiencies.arcana,
        bonus: this.calculateSkillBonus(
          this.stats.intelligence,
          proficiencyBonus,
          this.skillProficiencies.arcana
        ),
      },
      athletics: {
        ability: 'strength',
        proficient: this.skillProficiencies.athletics,
        bonus: this.calculateSkillBonus(
          this.stats.strength,
          proficiencyBonus,
          this.skillProficiencies.athletics
        ),
      },
      deception: {
        ability: 'charisma',
        proficient: this.skillProficiencies.deception,
        bonus: this.calculateSkillBonus(
          this.stats.charisma,
          proficiencyBonus,
          this.skillProficiencies.deception
        ),
      },
      history: {
        ability: 'intelligence',
        proficient: this.skillProficiencies.history,
        bonus: this.calculateSkillBonus(
          this.stats.intelligence,
          proficiencyBonus,
          this.skillProficiencies.history
        ),
      },
      insight: {
        ability: 'wisdom',
        proficient: this.skillProficiencies.insight,
        bonus: this.calculateSkillBonus(
          this.stats.wisdom,
          proficiencyBonus,
          this.skillProficiencies.insight
        ),
      },
      intimidation: {
        ability: 'charisma',
        proficient: this.skillProficiencies.intimidation,
        bonus: this.calculateSkillBonus(
          this.stats.charisma,
          proficiencyBonus,
          this.skillProficiencies.intimidation
        ),
      },
      investigation: {
        ability: 'intelligence',
        proficient: this.skillProficiencies.investigation,
        bonus: this.calculateSkillBonus(
          this.stats.intelligence,
          proficiencyBonus,
          this.skillProficiencies.investigation
        ),
      },
      medicine: {
        ability: 'wisdom',
        proficient: this.skillProficiencies.medicine,
        bonus: this.calculateSkillBonus(
          this.stats.wisdom,
          proficiencyBonus,
          this.skillProficiencies.medicine
        ),
      },
      nature: {
        ability: 'intelligence',
        proficient: this.skillProficiencies.nature,
        bonus: this.calculateSkillBonus(
          this.stats.intelligence,
          proficiencyBonus,
          this.skillProficiencies.nature
        ),
      },
      perception: {
        ability: 'wisdom',
        proficient: this.skillProficiencies.perception,
        bonus: this.calculateSkillBonus(
          this.stats.wisdom,
          proficiencyBonus,
          this.skillProficiencies.perception
        ),
      },
      performance: {
        ability: 'charisma',
        proficient: this.skillProficiencies.performance,
        bonus: this.calculateSkillBonus(
          this.stats.charisma,
          proficiencyBonus,
          this.skillProficiencies.performance
        ),
      },
      persuasion: {
        ability: 'charisma',
        proficient: this.skillProficiencies.persuasion,
        bonus: this.calculateSkillBonus(
          this.stats.charisma,
          proficiencyBonus,
          this.skillProficiencies.persuasion
        ),
      },
      religion: {
        ability: 'intelligence',
        proficient: this.skillProficiencies.religion,
        bonus: this.calculateSkillBonus(
          this.stats.intelligence,
          proficiencyBonus,
          this.skillProficiencies.religion
        ),
      },
      sleightOfHand: {
        ability: 'dexterity',
        proficient: this.skillProficiencies.sleightOfHand,
        bonus: this.calculateSkillBonus(
          this.stats.dexterity,
          proficiencyBonus,
          this.skillProficiencies.sleightOfHand
        ),
      },
      stealth: {
        ability: 'dexterity',
        proficient: this.skillProficiencies.stealth,
        bonus: this.calculateSkillBonus(
          this.stats.dexterity,
          proficiencyBonus,
          this.skillProficiencies.stealth
        ),
      },
      survival: {
        ability: 'wisdom',
        proficient: this.skillProficiencies.survival,
        bonus: this.calculateSkillBonus(
          this.stats.wisdom,
          proficiencyBonus,
          this.skillProficiencies.survival
        ),
      },
    };
  }
  */

  calculateModifier(score: number | null): number {
    if (score != null) {
      return Math.floor((score - 10) / 2);
    }
    return Math.floor((10 - 10) / 2);
  }

  calculatePassiveSkill(
    abilityScore: number | null,
    proficiencyBonus: number,
    isProficient: boolean
  ): number {
    if (abilityScore != null) {
      return 10 + this.calculateModifier(abilityScore) + (isProficient ? proficiencyBonus : 0);
    }
    return 0;
  }


  setLevel(level: number): void {
    this.level = level;
  }

  setClass(characterClass: string): void {
    this.characterClass = characterClass;
  }

  updateStats(newStats: Partial<Abilities>): void {
    this.abilities = { ...this.abilities, ...newStats };
  }

  setIcon(icon: String): void {
    this.icon = icon;
  }

  getIcon(): String {
    return this.icon;
  }

  setVisibility(visibility: string): void {
    this.visibility = visibility;
  }

  getVisibility(): string {
    return this.visibility;
  }
}
