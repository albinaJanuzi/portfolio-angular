import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeLink: string = '';

  setActive(link: string) {
    this.activeLink = link;
  }
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.translate.use(language);
  }
 
}
