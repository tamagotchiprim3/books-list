import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from 'src/app/shared/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  constructor(
    public dialogRef: MatDialogRef<BookCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBook
  ) {}

  public back(): void {
    this.dialogRef.close();
  }
}
