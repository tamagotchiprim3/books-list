import { Component } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { TABLE_COLUMNS } from './constants/column.const';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent {
  public openedBook: IBook;
  public columns: IColumn[] = TABLE_COLUMNS;
  public booksList: IBook[] = [
    {
      title: 'wer',
      author: 'wer',
      pageCount: 4,
      language: 'wer',
      genre: 'wer',
    },
    {
      title: 'wer',
      author: 'wer',
      pageCount: 4,
      language: 'wer',
      genre: 'wer',
    },
    {
      title: 'wer',
      author: 'wer',
      pageCount: 4,
      language: 'wer',
      genre: 'wer',
    },
  ];

  public addBook(): void {}

  public openCard(element: IBook): void {
    this.openedBook = element;
  }
}
