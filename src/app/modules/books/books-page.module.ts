import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { SelectComponent } from 'src/app/shared/components/controls/select/select.component';
import { InputComponent } from '../../shared/components/controls/input/input.component';
import { TextareaComponent } from '../../shared/components/controls/textarea/textarea.component';
import { ListComponentComponent } from '../../shared/components/list-component/list-component.component';
import { BooksPageRoutingModule } from './books-page-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksFilterComponent } from './components/books-filter/books-filter.component';
import { CreateBookCardComponent } from './components/create-book-card/create-book-card.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    BooksFilterComponent,
    BookCardComponent,
    CreateBookCardComponent,
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule,
    MatButtonModule,
    ListComponentComponent,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { width: '60%', height: '70%' },
    },
  ],
})
export class BooksPageModule {}
