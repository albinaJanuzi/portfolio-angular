import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../main-content/footer/footer.component';
@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
