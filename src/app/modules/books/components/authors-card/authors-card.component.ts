import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DEF_AUTHORS_OPT } from 'src/app/shared/constants/authors.const';
import { AUTHORS_PAGINATION } from 'src/app/shared/constants/paginations.conts';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { BooksPageComponent } from '../../pages/books-page/books-page.component';
import { CreateAuthorCardComponent } from '../create-author-card/create-author-card.component';
import { EditAuthorCardComponent } from '../edit-author-card/edit-author-card.component';

@Component({
  selector: 'app-authors-card',
  templateUrl: './authors-card.component.html',
  styleUrls: ['./authors-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsCardComponent implements OnInit, OnDestroy {
  public pagination = AUTHORS_PAGINATION;
  public authorList: { author: string }[];
  public columns: IColumn[] = [{ headerName: 'Author', fieldKey: 'author' }];

  constructor(
    public dialogRef: MatDialogRef<BooksPageComponent>,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('authors')) {
      this.authorList = JSON.parse(localStorage.getItem('authors')).map(
        (element: string) => ({ author: element })
      );
    } else {
      this.authorList = DEF_AUTHORS_OPT.map((element) => ({ author: element }));
    }
  }

  ngOnDestroy(): void {
    this.dialogRef.close(this.authorList);
  }

  public editAuthor(element: [{ author: string }, number]): void {
    const dialogRef = this.dialog.open(EditAuthorCardComponent, {
      data: element[0].author,
    });
    dialogRef.afterClosed().subscribe((author: string) => {
      if (author) {
        const authorsStorage = JSON.parse(localStorage.getItem('books'))?.map(
          (book: IBook) => {
            return book.author === element[0].author
              ? {
                  ...book,
                  author: author,
                }
              : book;
          }
        );
        this.authorList[element[1]] = { author: author };
        this.authorList = [...this.authorList];

        localStorage.setItem('books', JSON.stringify(authorsStorage));
        localStorage.setItem(
          'authors',
          JSON.stringify(this.authorList.map((element) => element.author))
        );
        this.cdr.markForCheck();
      }
    });
  }

  public addAuthor(): void {
    const dialogRef = this.dialog.open(CreateAuthorCardComponent);
    dialogRef.afterClosed().subscribe((newAuthor: string) => {
      if (newAuthor) {
        this.authorList = [...this.authorList, { author: newAuthor }];
        localStorage.setItem(
          'authors',
          JSON.stringify(this.authorList.map((element) => element.author))
        );
        this.cdr.markForCheck();
      }
    });
  }
}
