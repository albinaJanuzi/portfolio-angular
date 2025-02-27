import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-feedback',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.translate.use(language);
  }
}
