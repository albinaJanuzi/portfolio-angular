import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-my-projects',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  activeSection: string = 'el-polloLoco'; // Start-Sektion

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.translate.use(language);
  }

  goToLiveTest() {
    window.open('https://albina-januzi.de/elPolloLoco/', '_blank');
  }

  goToGitHub(){
    window.open('https://github.com/albinaJanuzi/elPolloLoco', '_blank');
  }

  

}
