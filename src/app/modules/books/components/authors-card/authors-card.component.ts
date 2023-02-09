import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DEF_AUTHORS_OPT } from 'src/app/shared/constants/authors.const';
import { AUTHORS_PAGINATION } from 'src/app/shared/constants/paginations.conts';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { CreateAuthorCardComponent } from '../create-author-card/create-author-card.component';
import { EditAuthorCardComponent } from '../edit-author-card/edit-author-card.component';

@Component({
  selector: 'app-authors-card',
  templateUrl: './authors-card.component.html',
  styleUrls: ['./authors-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsCardComponent implements OnInit {
  public pagination = AUTHORS_PAGINATION;
  public authorList: { author: string }[];
  public columns: IColumn[] = [{ headerName: 'Author', fieldKey: 'author' }];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('authors')) {
      this.authorList = JSON.parse(localStorage.getItem('authors')).map(
        (element: string) => ({ author: element })
      );
    } else {
      this.authorList = DEF_AUTHORS_OPT.map((element) => ({ author: element }));
    }
  }

  public editAuthor(element: [{ author: string }, number]): void {
    const dialogRef = this.dialog.open(EditAuthorCardComponent, {
      data: element[0].author,
    });
    dialogRef.afterClosed().subscribe((author: string) => {
      if (author) {
        this.authorList[element[1]] = { author: author };
        this.authorList = [...this.authorList];
        localStorage.setItem(
          'authors',
          JSON.stringify(this.authorList.map((element) => element.author))
        );
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
      }
    });
  }
}
