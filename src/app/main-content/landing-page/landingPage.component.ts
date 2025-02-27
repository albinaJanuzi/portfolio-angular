import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent,TranslatePipe, TranslateDirective],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {
  isSticky: boolean = false;
  overlayVisible: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    
    //  Navbar nach oben
    if (scrollPosition > 300) {
      this.isSticky = true;
    } else {
      this.isSticky = false; //Navbar zurück nach unten
    }
  }

  toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
  }

   constructor(private translate: TranslateService) {}
    changeLanguage(language: string){
      this.translate.use(language);
    }
}

