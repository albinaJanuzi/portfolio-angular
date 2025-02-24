import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  checkboxState: 'default' | 'checked' | 'hover' | 'error' = 'default'; 
  formData = { name: '', email: '', message: '', agreed: false };
  isSubmitted = false;

  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    if (!form.valid || !this.formData.agreed) {
      if (!this.formData.agreed) {
        this.checkboxState = 'error'; // Fehleranzeige für Checkbox
      }
      return; // Formular wird nicht abgeschickt
    }

    console.log('Form Data:', this.formData);
    alert('Message sent successfully!');
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
}

