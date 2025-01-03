import { UsernameAndLogoutComponent } from "../page/shared/username-and-logout/username-and-logout.component";

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

export interface FeatureCollection {
  general: Feature[]; // Features available to all classes
  rogue: Feature[];   // Features specific to the Rogue class
  fighter: Feature[]; // Features specific to the Fighter class
  wizard: Feature[];  // Features specific to the Wizard class
}

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

export interface GatheredSkills {
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
  associatedClass: string;
}

export interface Spell {
  name: string;
  level: number;
  prepared: boolean;
}

export interface Character {
  id?: number;
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
  id?: number;
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
    id?: number,
  ) {
    this.id = id;
    this.name = name;
    this.playerName = UsernameAndLogoutComponent.userName;
    this.characterClass = '';
    this.level = 1;
    this.hitPoints = 0; // calculated later
    this.armorClass = 0; // calculated later
    this.speed = 30;
    this.initiative = 0; // calculated later
    this.proficiencyBonus = 0; // calculated later
    this.passivePerception = 0; // calculated later
    this.stats = { 
      dexterity: 10,
      strength: 10,
      wisdom: 10,
      intelligence: 10,
      charisma: 10,
      constitution: 10
    };
    this.savingThrows = { // calculate later
      strengthSave: 0,
      dexteritySave: 0,
      constitutionSave: 0,
      intelligenceSave: 0,
      wisdomSave: 0,
      charismaSave: 0
    }
    this.savingThrowsProficiencies = {
      strengthSave: false,
      dexteritySave: false,
      constitutionSave: false,
      intelligenceSave: false,
      wisdomSave: false,
      charismaSave: false
    }
    this.skills = { // calculate later
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
    this.features = [];
    // spells - depends on class and level
    this.spells = [];

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
    this.calculateSavingThrows(this.proficiencyBonus);
    this.calculateSkills();
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

  calculateSavingThrows(proficiencyBonus: number): void {
    this.savingThrows = {
      strengthSave: this.calculateSavingThrow(
        this.stats.strength ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.strengthSave
      ),
      dexteritySave: this.calculateSavingThrow(
        this.stats.dexterity ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.dexteritySave
      ),
      constitutionSave: this.calculateSavingThrow(
        this.stats.constitution ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.constitutionSave
      ),
      intelligenceSave: this.calculateSavingThrow(
        this.stats.intelligence ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.intelligenceSave
      ),
      wisdomSave: this.calculateSavingThrow(
        this.stats.wisdom ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.wisdomSave
      ),
      charismaSave: this.calculateSavingThrow(
        this.stats.charisma ?? 0,
        proficiencyBonus,
        this.savingThrowsProficiencies.charismaSave
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

  calculateSkills(): void {  
    this.skills = {
      acrobatics: this.calculateSkillBonus(
          this.stats.dexterity,
          this.proficiencyBonus,
          this.skillsProficiencies.acrobatics
        ),
      animalHandling: this.calculateSkillBonus(
          this.stats.wisdom,
          this.proficiencyBonus,
          this.skillsProficiencies.animalHandling
        ),
      arcana: this.calculateSkillBonus(
          this.stats.intelligence,
          this.proficiencyBonus,
          this.skillsProficiencies.arcana
        ),
      athletics: this.calculateSkillBonus(
          this.stats.strength,
          this.proficiencyBonus,
          this.skillsProficiencies.athletics
        ),
      deception: this.calculateSkillBonus(
          this.stats.charisma,
          this.proficiencyBonus,
          this.skillsProficiencies.deception
        ),
      history: this.calculateSkillBonus(
          this.stats.intelligence,
          this.proficiencyBonus,
          this.skillsProficiencies.history
        ),
      insight: this.calculateSkillBonus(
          this.stats.wisdom,
          this.proficiencyBonus,
          this.skillsProficiencies.insight
        ),
      intimidation: this.calculateSkillBonus(
          this.stats.charisma,
          this.proficiencyBonus,
          this.skillsProficiencies.intimidation
        ),
      investigation: this.calculateSkillBonus(
          this.stats.intelligence,
          this.proficiencyBonus,
          this.skillsProficiencies.investigation
        ),
      medicine: this.calculateSkillBonus(
          this.stats.wisdom,
          this.proficiencyBonus,
          this.skillsProficiencies.medicine
        ),
      nature: this.calculateSkillBonus(
          this.stats.intelligence,
          this.proficiencyBonus,
          this.skillsProficiencies.nature
        ),
      perception: this.calculateSkillBonus(
          this.stats.wisdom,
          this.proficiencyBonus,
          this.skillsProficiencies.perception
        ),
      performance: this.calculateSkillBonus(
          this.stats.charisma,
          this.proficiencyBonus,
          this.skillsProficiencies.performance
        ),
      persuasion: this.calculateSkillBonus(
          this.stats.charisma,
          this.proficiencyBonus,
          this.skillsProficiencies.persuasion
        ),
      religion: this.calculateSkillBonus(
          this.stats.intelligence,
          this.proficiencyBonus,
          this.skillsProficiencies.religion
        ),
      sleightOfHand: this.calculateSkillBonus(
          this.stats.dexterity,
          this.proficiencyBonus,
          this.skillsProficiencies.sleightOfHand
        ),
      stealth: this.calculateSkillBonus(
          this.stats.dexterity,
          this.proficiencyBonus,
          this.skillsProficiencies.stealth
        ),
      survival: this.calculateSkillBonus(
          this.stats.wisdom,
          this.proficiencyBonus,
          this.skillsProficiencies.survival
        ),
    };
  }

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
    this.calculateStats();
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
