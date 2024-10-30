import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skills-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-display.component.html',
  styleUrl: './skills-display.component.css'
})
export class SkillsDisplayComponent {
  skills = [
    [false, "Dex", "Acrobatics", "+3"],
    [true, "Wis", "Animal Handling", "+9"],
    [true, "Int", "Arcana", "+6"],
    [false, "Str", "Athletics", "+0"],
    [false, "Cha", "Deception", "+5"],
    [false, "Int", "History", "+3"],
    [true, "Wis", "Insight", "+5"],
    [true, "Cha", "Intimidation", "+4"],
    [true, "Int", "Investigation", "+9"],
    [false, "Wis", "Medicine", "-1"],
    [false, "Int", "Nature", "+5"],
    [true, "Wis", "Perception", "+5"],
    [false, "Cha", "Performance", "+0"],
    [false, "Cha", "Persuasion", "+0"],
    [false, "Int", "Religion", "+5"],
    [false, "Dex", "Sleight of Hand", "+3"],
    [false, "Dex", "Stealth", "+3"],
    [false, "Wis", "Survival", "-1"]
  ];
}
