import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DEF_AUTHORS_OPT } from 'src/app/shared/constants/authors.const';
import { LANGUAGES_OPT } from 'src/app/shared/constants/languages.const';
import { IBook } from 'src/app/shared/interfaces/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-create-book-card',
  templateUrl: './create-book-card.component.html',
  styleUrls: ['./create-book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBookCardComponent implements OnInit {
  public bookForm: FormGroup;
  public selectAuthorOpt: string[];
  public selectLangugeOpt: string[] = LANGUAGES_OPT;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BookCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBook,
    private cdR: ChangeDetectorRef
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

  ngOnInit(): void {
    if (localStorage.getItem('authors')) {
      this.selectAuthorOpt = JSON.parse(localStorage.getItem('authors'));
    } else {
      this.selectAuthorOpt = DEF_AUTHORS_OPT;
    }
  }

  public back(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    if (!this.bookForm.valid) {
      this.bookForm.markAllAsTouched();
      return;
    }
    this.cdR.markForCheck();
    this.dialogRef.close(this.bookForm.getRawValue());
  }
}
