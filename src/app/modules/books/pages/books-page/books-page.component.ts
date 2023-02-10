import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DEF_AUTHORS_OPT } from 'src/app/shared/constants/authors.const';
import { LANGUAGES_OPT } from 'src/app/shared/constants/languages.const';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent implements OnInit {
  public filters: FormGroup;
  public filteredList: IBook[] = null;
  public isFiltered: boolean;
  public minPages: number;
  public maxPages: number;
  public selectLanguagesOpt = LANGUAGES_OPT;
  public selectAuthorsOpt: string[];
  public selectGenreOpt: string[];
  public openedBook: IBook;
  public pagination = BOOKS_PAGINATION;
  public columns: IColumn[] = TABLE_COLUMNS;
  public booksList?: IBook[] = [];
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.filters = fb.group({
      books: [],
      pages: [],
      authors: [],
      languages: [],
      genre: [],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('authors')) {
      this.selectAuthorsOpt = JSON.parse(localStorage.getItem('authors'));
    } else {
      this.selectAuthorsOpt = DEF_AUTHORS_OPT;
    }
    if (localStorage.getItem('books')) {
      this.booksList = [...JSON.parse(localStorage.getItem('books'))];
      this.minPages = +JSON.parse(localStorage.getItem('books'))
        .map((book: IBook) => book.pageCount)
        .sort((a: number, b: number) => a - b)[0];
      this.maxPages = +JSON.parse(localStorage.getItem('books'))
        .map((book: IBook) => book.pageCount)
        .sort((a: number, b: number) => b - a)[0];
      this.filters.get('pages').setValue({
        lowerValue: +this.minPages,
        higherValue: +this.maxPages,
      });
      this.selectGenreOpt = JSON.parse(localStorage.getItem('books'))
        .map((book: IBook) => book.genre)
        .filter(
          (item: any, index: any) =>
            JSON.parse(localStorage.getItem('books'))
              .map((book: IBook) => book.genre)
              .indexOf(item) === index
        );
      this.selectGenreOpt.unshift('-');
    }

    this.filters.valueChanges.subscribe((filters) => {
      this.isFiltered = false;
      for (let key in filters) {
        if (
          filters[key] &&
          (filters[key].length > 0 || filters[key].lowerValue)
        ) {
          this.isFiltered = true;
        }
      }
      this.filteredList = [
        ...this.booksList
          .filter((item) => {
            return filters.pages &&
              filters.pages.lowerValue &&
              filters.pages.higherValue
              ? filters.pages &&
                  item.pageCount <= filters.pages.higherValue &&
                  item.pageCount >= filters.pages.lowerValue
              : true;
          })
          .filter((item) => {
            return filters.genre && filters.genre !== '-'
              ? filters.genre === item.genre
              : true;
          })
          .filter((item) => {
            return filters.authors && filters.authors.length > 0
              ? filters.authors.some((author: string) => author === item.author)
              : true;
          })
          .filter((item) => {
            return filters.languages && filters.languages.length > 0
              ? filters.languages.some(
                  (language: string) => language === item.language
                )
              : true;
          })
          .filter((item) => {
            return filters.books
              ? item.title.toLowerCase().match(filters.books.toLowerCase()) ||
                  item.description
                    .toLowerCase()
                    .match(filters.books.toLowerCase())
              : true;
          }),
      ];
    });
    this.cdr.markForCheck();
  }

  public addBook(): void {
    const dialogRef = this.dialog.open(CreateBookCardComponent);
    dialogRef.afterClosed().subscribe((newBook: IBook) => {
      if (newBook) {
        this.booksList = [...this.booksList, newBook];

        if (
          this.selectGenreOpt &&
          !this.selectGenreOpt.includes(newBook.genre)
        ) {
          this.selectGenreOpt = [...this.selectGenreOpt, newBook.genre];
        } else {
          this.selectGenreOpt = [newBook.genre];
        }
        if (this.selectGenreOpt[0] !== '-') {
          this.selectGenreOpt.unshift('-');
        }
        if (this.booksList.length >= 2) {
          const sortBooks = this.booksList.sort(
            (a: IBook, b: IBook) => a.pageCount - b.pageCount
          );
          this.filters.get('pages').setValue({
            lowerValue: +sortBooks[0].pageCount,
            higherValue: +sortBooks[sortBooks.length - 1].pageCount,
          });
          this.minPages = +sortBooks[0].pageCount;
          this.maxPages = +sortBooks[sortBooks.length - 1].pageCount;
        }

        this.filteredList = [...this.booksList];
        console.log('this.booksList: ', this.booksList);
        console.log('this.filteredList: ', this.filteredList);
        localStorage.setItem('books', JSON.stringify(this.booksList));
        this.cdr.markForCheck();
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
    dialogRef.afterClosed().subscribe((authors) => {
      console.log('authors: ', authors);

      this.selectAuthorsOpt = authors.map(
        (author: { author: string }) => author.author
      );
      if (localStorage.getItem('books')) {
        this.filteredList = [...JSON.parse(localStorage.getItem('books'))];
        this.booksList = [...JSON.parse(localStorage.getItem('books'))];
      }
      this.cdr.markForCheck();
    });
  }
}
