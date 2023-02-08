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
import { SliderComponent } from '../../shared/components/controls/slider/slider.component';
import { TextareaComponent } from '../../shared/components/controls/textarea/textarea.component';
import { ListComponentComponent } from '../../shared/components/list-component/list-component.component';
import { BooksPageRoutingModule } from './books-page-routing.module';
import { AuthorsCardComponent } from './components/authors-card/authors-card.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CreateAuthorCardComponent } from './components/create-author-card/create-author-card.component';
import { CreateBookCardComponent } from './components/create-book-card/create-book-card.component';
import { EditAuthorCardComponent } from './components/edit-author-card/edit-author-card.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    BookCardComponent,
    CreateBookCardComponent,
    EditAuthorCardComponent,
    CreateAuthorCardComponent,
    AuthorsCardComponent,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { width: '60%', height: '70%' },
    },
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
    SliderComponent,
  ],
})
export class BooksPageModule {}
