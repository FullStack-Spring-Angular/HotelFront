import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  currentSection: string;

  navigateToSection(section: string) {
    this.currentSection = section;
  }
}
