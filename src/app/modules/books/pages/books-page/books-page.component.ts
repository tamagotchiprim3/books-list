import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { CreateBookCardComponent } from '../../components/create-book-card/create-book-card.component';
import { TABLE_COLUMNS } from './constants/column.const';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent {
  public openedBook: IBook;
  public columns: IColumn[] = TABLE_COLUMNS;
  public booksList?: IBook[];

  constructor(private dialog: MatDialog) {}

  public addBook(): void {
    const dialogRef = this.dialog.open(CreateBookCardComponent);
    dialogRef.afterClosed().subscribe((newBook: IBook) => {
      if (newBook) {
        console.log('newBook: ', newBook);
        this.booksList = [newBook];
        console.log('this.booksList: ', this.booksList);
      }
    });
  }

  public openCard(element: IBook): void {
    const dialogRef = this.dialog.open(BookCardComponent, {
      data: {
        title: element.title,
        author: element.author,
        pageCount: element.pageCount,
        language: element.language,
        genre: element.genre,
        description: element.description,
      },
    });
  }
}
