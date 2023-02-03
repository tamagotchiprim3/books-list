import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book-card',
  templateUrl: './create-book-card.component.html',
  styleUrls: ['./create-book-card.component.scss'],
})
export class CreateBookCardComponent {
  public bookForm: FormGroup;
  public selectOpt: string[] = ['sheks', 'pushka', 'dostoevsky'];

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      pageCount: ['', Validators.required],
      language: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }
}
