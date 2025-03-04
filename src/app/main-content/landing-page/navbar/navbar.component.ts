import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeLink: string = '';
  activeLanguage: string = 'en';

  setActive(link: string) {
    this.activeLink = link;
    this.scrollToSection(link);
  }
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.activeLanguage = language;
    this.translate.use(language);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          window.scrollBy(0, -80); 
        }, 500);
    }
  }

 
}
