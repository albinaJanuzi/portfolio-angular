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
  }
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.activeLanguage = language;
    this.translate.use(language);
  }
 
}
