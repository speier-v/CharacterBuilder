export interface CharacterStats {
  dexterity: number | null;
  strength: number | null;
  wisdom: number | null;
  intelligence: number | null;
  charisma: number | null;
  constitution: number | null;
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
  icon: string;
}

export class IconImages {
  images: Array<String>;

  constructor() {
    this.images = [
      'assets/images/character_frame_questionmark.jpeg',
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
  icon: string;

  constructor(
    icon: string = '',
    name: string = '',
    level: number = 1,
    characterClass: string = '',
    stats: CharacterStats = { 
      dexterity: 0,
      strength: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0,
      constitution: 0
    }
  ) {
    this.name = name;
    this.level = level;
    this.characterClass = characterClass;
    this.stats = stats;
    this.icon = icon;
    console.log(`Character created: ${JSON.stringify(this)}`);
  }

  setLevel(level: number): void {
    this.level = level;
    console.log(`Character changed level: ${this.name} is now level ${this.level}`);
  }

  setClass(characterClass: string): void {
    this.characterClass = characterClass;
    console.log(`Class updated: ${this.name} is now a ${this.characterClass}`);
  }

  updateStats(newStats: Partial<CharacterStats>): void {
    this.stats = { ...this.stats, ...newStats };
    console.log(`Stats updated for ${this.name}: ${JSON.stringify(this.stats)}`);
  }

  setIcon(icon: string): void {
    this.icon = icon;
    console.log(`Character changed icon to ${this.icon}`);
  }

  getIcon(): String {
    return this.icon;
  }
}
