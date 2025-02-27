import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.translate.use(language);
  }
}
