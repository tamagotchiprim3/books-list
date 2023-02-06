import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BOOKS_PAGINATION } from 'src/app/shared/constants/paginations.conts';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { AuthorsCardComponent } from '../../components/authors-card/authors-card.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { CreateBookCardComponent } from '../../components/create-book-card/create-book-card.component';
import { TABLE_COLUMNS } from './constants/column.const';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  public openedBook: IBook;
  public pagination = BOOKS_PAGINATION;
  public columns: IColumn[] = TABLE_COLUMNS;
  public booksList?: IBook[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('books')) {
      this.booksList = [...JSON.parse(localStorage.getItem('books'))];
    }
  }

  public addBook(): void {
    const dialogRef = this.dialog.open(CreateBookCardComponent);
    dialogRef.afterClosed().subscribe((newBook: IBook) => {
      if (newBook) {
        this.booksList = [...this.booksList, newBook];
        localStorage.setItem('books', JSON.stringify(this.booksList));
      }
    });
  }

  public openCard(element: [IBook, number]): void {
    const dialogRef = this.dialog.open(BookCardComponent, {
      data: {
        title: element[0].title,
        author: element[0].author,
        pageCount: element[0].pageCount,
        language: element[0].language,
        genre: element[0].genre,
        description: element[0].description,
      },
    });
  }

  public openAuthors(): void {
    const dialogRef = this.dialog.open(AuthorsCardComponent);
  }
}
