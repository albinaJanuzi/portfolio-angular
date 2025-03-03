import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../main-content/footer/footer.component';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule, FooterComponent,TranslatePipe,TranslateDirective,NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit{
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  changeLanguage(language: string){
    this.translate.use(language);
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
}
}
