import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'class-choice-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-choice-dropdown.component.html',
  styleUrl: './class-choice-dropdown.component.css'
})
export class ClassChoiceDropdownComponent {
  items = ['Fighter', 'Wizard', 'Rogue'];
  selectedItem: string | null = null;
  isDropdownOpen = false;

  @Output() itemSelected = new EventEmitter<string>();

  ngOnInit() {
    if (this.items.length > 0) {
      this.selectedItem = this.items[0];
      this.itemSelected.emit(this.selectedItem);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log("Dropdown is now:", this.isDropdownOpen);
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
    this.itemSelected.emit(item);
  }
}
