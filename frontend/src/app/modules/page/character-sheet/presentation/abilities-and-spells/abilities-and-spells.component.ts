import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'abilities-and-spells',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abilities-and-spells.component.html',
  styleUrl: './abilities-and-spells.component.css',
})
export class AbilitiesAndSpellsComponent {
  @Input() isEditable = false;
  selectedTab: string = 'all';
  isModalOpen: boolean = false;
  spellLimit: number = 3;

  actions = [
    { name: 'Attack', description: 'Make a melee or ranged weapon attack.' },
    { name: 'Dash', description: 'Move up to double your speed.' },
    { name: 'Dodge', description: 'Until your next turn, any attack rolls against you have disadvantage.' },
  ];

  bonusActions = [
    { name: 'Second Wind', description: 'Regain hit points equal to 1d10 + your fighter level.' },
    { name: 'Cunning Action', description: 'Take the Dash, Disengage, or Hide action as a bonus action.' },
  ];

  activeSpells = [
    { name: 'Fireball', level: 3, description: 'Deals 8d6 fire damage in a 20-foot radius.' },
    { name: 'Mage Armor', level: 1, description: 'Grants a creature AC of 13 + Dex modifier.' },
  ];

  availableSpells = [
    { name: 'Healing Word', level: 1, description: 'Heals 1d4 + your spellcasting modifier.' },
    { name: 'Shield', level: 1, description: 'Grants +5 AC until the start of your next turn.' },
    { name: 'Detect Magic', level: 1, description: 'Sense magic within 30 feet.' },
  ];

  setTab(tab: string) {
    this.selectedTab = tab;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  activateSpell(spell: any) {
    if (this.activeSpells.length < this.spellLimit) {
      this.availableSpells = this.availableSpells.filter(s => s !== spell);
      this.activeSpells.push(spell);
    }
  }

  deactivateSpell(spell: any) {
    this.activeSpells = this.activeSpells.filter(s => s !== spell);
    this.availableSpells.push(spell);
  }

  isSpellLimitReached(): boolean {
    return this.activeSpells.length >= this.spellLimit;
  }
}
