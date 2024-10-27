import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'class-choice-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-choice-dropdown.component.html',
  styleUrl: './class-choice-dropdown.component.css'
})
export class ClassChoiceDropdownComponent {
  items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedItem: string | null = null;
  isDropdownOpen = false;

  ngOnInit() {
    if (this.items.length > 0) {
      this.selectedItem = this.items[0];
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log("Dropdown is now:", this.isDropdownOpen);
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }
}
