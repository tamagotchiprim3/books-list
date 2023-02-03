import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book-card',
  templateUrl: './create-book-card.component.html',
  styleUrls: ['./create-book-card.component.scss'],
})
export class CreateBookCardComponent {
  public bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      pageCount: ['', Validators.required],
      language: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }
}
