import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../main-content/footer/footer.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';


@Component({
  selector: 'app-privacy-policy',
  imports: [RouterModule, FooterComponent,TranslatePipe, TranslateDirective,NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
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
