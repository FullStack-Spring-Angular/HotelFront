import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  currentSection: string;

  constructor(){}

  ngOnInit(){
    this.currentSection = 'reservas';
  }
  navigateToSection(section: string) {
    this.currentSection = section;
  }
}
