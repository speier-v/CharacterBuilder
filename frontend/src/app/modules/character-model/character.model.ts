export interface CharacterStats {
  dexterity: number | null;
  strength: number | null;
  wisdom: number | null;
  intelligence: number | null;
  charisma: number | null;
  constitution: number | null;
}

export interface additionalStats {
  proficiency: number;
  speed: number;
  armorClass: number;
  maxHP: number;
  passiveInsight: number;
  passivePerception: number;
  passiveInvestigation: number;
  initiative: number;
}

export interface savingThrowProficiencies {
  strength: boolean;
  dexterity: boolean;
  constitution: boolean;
  intelligence: boolean;
  wisdom: boolean;
  charisma: boolean;
};

export interface skillProficiencies {
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
};

export interface skills {
  acrobatics: { ability: string; proficient: boolean; bonus: number; };
  animalHandling: { ability: string; proficient: boolean; bonus: number; };
  arcana: { ability: string; proficient: boolean; bonus: number; };
  athletics: { ability: string; proficient: boolean; bonus: number; };
  deception: { ability: string; proficient: boolean; bonus: number; };
  history: { ability: string; proficient: boolean; bonus: number; };
  insight: { ability: string; proficient: boolean; bonus: number; };
  intimidation: { ability: string; proficient: boolean; bonus: number; };
  investigation: { ability: string; proficient: boolean; bonus: number; };
  medicine: { ability: string; proficient: boolean; bonus: number; };
  nature: { ability: string; proficient: boolean; bonus: number; };
  perception: { ability: string; proficient: boolean; bonus: number; };
  performance: { ability: string; proficient: boolean; bonus: number; };
  persuasion: { ability: string; proficient: boolean; bonus: number; };
  religion: { ability: string; proficient: boolean; bonus: number; };
  sleightOfHand: { ability: string; proficient: boolean; bonus: number; };
  stealth: { ability: string; proficient: boolean; bonus: number; };
  survival: { ability: string; proficient: boolean; bonus: number; };
};

export interface savingThrows {
  dexterity: number;
  strength: number;
  wisdom: number;
  intelligence: number;
  charisma: number;
  constitution: number;
}

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
      { level: 2, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
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
      { level: 2, skills: [{ name: 'Fireball', description: 'Deals area fire damage' }] },
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
      { level: 2, skills: [{ name: 'Evasion', description: 'Avoids damage once per round' }] },
    ],
  },
];

export interface Character {
  name: string;
  level: number;
  characterClass: string;
  stats: CharacterStats;
  icon: String;
  visibility: string;
  id: number;
  additionalStats: additionalStats;
  savingThrowProficiencies: savingThrowProficiencies;
  savingThrows: savingThrows;
  skillProficiencies: skillProficiencies;
  skills: skills;
}

export class IconImages {
  images: Array<String>;

  constructor() {
    this.images = [
      'assets/images/character-avatar.png',
      'assets/images/character_frame_1.jpeg',
      'assets/images/character_frame_2.jpeg',
      'assets/images/character_frame_3.jpeg',
      'assets/images/character_frame_4.jpeg',
      'assets/images/character_frame_5.jpeg',
      'assets/images/character_frame_6.jpeg',
      'assets/images/character_frame_7.jpeg',
      'assets/images/character_frame_8.jpeg'
    ];
  }
} 

export class Character implements Character {
  name: string;
  level: number;
  characterClass: string;
  stats: CharacterStats;
  icon: String;
  visibility: string;
  id: number;
  additionalStats: additionalStats;
  savingThrowProficiencies: savingThrowProficiencies;
  savingThrows: savingThrows;
  skillProficiencies: skillProficiencies;
  skills: skills;

  constructor(
    name: string,
    id: number
  ) {
    this.name = name;
    this.level = 1;
    this.characterClass = '';
    this.stats = { 
      dexterity: 0,
      strength: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0,
      constitution: 0
    };
    this.icon = new IconImages().images[0];
    this.visibility = 'private';
    this.id = id;
    this.savingThrowProficiencies = {
      strength: false,
      dexterity: false,
      constitution: false,
      intelligence: false,
      wisdom: false,
      charisma: false,
    };
    this.savingThrows = this.calculateSavingThrows(this.calculateProficiency(this.level));
    this.skillProficiencies = {
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
    };
    this.skills = this.calculateSkills();
    this.additionalStats = this.calculateAdditionalStats();
    
    ////console.log(`Character created: ${JSON.stringify(this)}`);
  }

  calculateAdditionalStats(): additionalStats {
    const proficiencyBonus = this.calculateProficiency(this.level);
    const speed = 30;
    const armorBase = 10;
    const hitDie = 10;

    //this.savingThrows = this.calculateSavingThrows(proficiencyBonus);
    return this.additionalStats = {
      proficiency: proficiencyBonus,
      speed: speed,
      armorClass: this.calculateArmorClass(armorBase),
      maxHP: this.calculateMaxHP(hitDie),
      passiveInsight: this.calculatePassiveSkill(this.stats.wisdom, proficiencyBonus, false),
      passivePerception: this.calculatePassiveSkill(this.stats.wisdom, proficiencyBonus, false),
      passiveInvestigation: this.calculatePassiveSkill(this.stats.intelligence, proficiencyBonus, false),
      initiative: this.calculateModifier(this.stats.dexterity),
    };
  }

  calculateSavingThrows(proficiencyBonus: number): savingThrows {
    return this.savingThrows = {
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
  
  calculateSkills(): skills {
    const proficiencyBonus = this.calculateProficiency(this.level);
    ////console.log('Re-calculating skills!');
  
    return this.skills = {
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

  calculateModifier(score: number | null): number {
    if (score != null) {
      return Math.floor((score - 10) / 2);
    }
    return Math.floor((10 - 10) / 2);
  }

  calculateProficiency(level: number): number {
    return Math.floor((level - 1) / 4) + 2;
  }

  calculateArmorClass(armorBase: number): number {
    const dexModifier = this.calculateModifier(this.stats.dexterity);
    return armorBase + dexModifier;
  }

  calculateMaxHP(hitDie: number): number {
    const conModifier = this.calculateModifier(this.stats.constitution);
    return hitDie + (this.level - 1) * (Math.floor(hitDie / 2) + 1 + conModifier);
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
    ////console.log(`Character changed level: ${this.name} is now level ${this.level}`);
  }

  setClass(characterClass: string): void {
    this.characterClass = characterClass;
    ////console.log(`Class updated: ${this.name} is now a ${this.characterClass}`);
  }

  updateStats(newStats: Partial<CharacterStats>): void {
    this.stats = { ...this.stats, ...newStats };
    ////console.log(`Stats updated for ${this.name}: ${JSON.stringify(this.stats)}`);
  }

  setIcon(icon: String): void {
    this.icon = icon;
    ////console.log(`Character changed icon to ${this.icon}`);
  }

  getIcon(): String {
    return this.icon;
  }

  setVisibility(visibility: string): void {
    this.visibility = visibility;
    ////console.log(`Character visibility set to ${this.visibility}`);
  }

  getVisibility(): string {
    return this.visibility;
  }
}
