import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  activeSection: string = 'da-bubble'; // Start-Sektion

  setActiveSection(section: string) {
    this.activeSection = section;
  }

}
