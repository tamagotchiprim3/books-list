import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-create-book-card',
  templateUrl: './create-book-card.component.html',
  styleUrls: ['./create-book-card.component.scss'],
})
export class CreateBookCardComponent {
  public bookForm: FormGroup;
  public selectOpt: string[] = ['sheks', 'pushka', 'dostoevsky'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BookCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBook
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      pageCount: ['', Validators.required],
      language: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  public back(): void {
    this.dialogRef.close();
  }
}
