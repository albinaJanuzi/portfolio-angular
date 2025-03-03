import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe, TranslateDirective, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  checkboxState: 'default' | 'checked' | 'hover' | 'error' = 'default'; 
  http = inject(HttpClient);
  formData = { name: '', email: '', message: '', agreed: false };
  isSubmitted = false;
  mailTest = false;
  showSuccessMessage = false; // Für das Dialogfenster

  post = {
    endPoint: 'http://albina-januzi.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid || !this.formData.agreed) {
      if (!this.formData.agreed) {
        this.checkboxState = 'error';
      }
      return; 
    }
    if (form.submitted && form.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            form.resetForm();
            this.checkboxState = 'default';
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000); 
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (form.submitted && form.form.valid && this.mailTest) {
      form.resetForm();
      this.checkboxState = 'default';
    }
  }

  toggleCheckbox() {
    this.formData.agreed = !this.formData.agreed;
    this.checkboxState = this.formData.agreed ? 'checked' : 'default';
  }

  onHover() {
    if (this.checkboxState !== 'checked' && this.checkboxState !== 'error') {
      this.checkboxState = 'hover';
    }
  }

  onLeave() {
    if (this.checkboxState !== 'checked' && this.checkboxState !== 'error') {
      this.checkboxState = 'default';
    }
  }

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string){
    this.translate.use(language);
  }
}

