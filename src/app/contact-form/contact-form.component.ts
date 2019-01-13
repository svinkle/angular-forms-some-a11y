import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.showMessage = false;

    this.contactForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g),
        Validators.minLength(7)
      ])],
      'message': [null, Validators.required]
    });
  }

  submitForm(value: any) {
    console.log(value);

    if (this.contactForm.valid) {
      this.showMessage = true;
    }
  }

}
