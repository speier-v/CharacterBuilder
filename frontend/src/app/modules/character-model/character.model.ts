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
    levels: ClassLevelSkills[];
}
  

export const modelCharacterClasses: ModelCharacterClass[] = [
    {
      className: 'Fighter',
      levels: [
        { level: 1, skills: [{ name: 'Strike', description: 'Basic melee attack' }] },
        { level: 2, skills: [{ name: 'Shield Bash', description: 'Stun enemy for 1 turn' }] },
      ],
    },
    {
      className: 'Wizard',
      levels: [
        { level: 1, skills: [{ name: 'Magic Missile', description: 'Deals magic damage' }] },
        { level: 2, skills: [{ name: 'Fireball', description: 'Deals area fire damage' }] },
      ],
    },
    {
      className: 'Rogue',
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
}