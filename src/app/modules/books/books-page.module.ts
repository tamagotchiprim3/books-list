import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SelectComponent } from 'src/app/shared/components/controls/select/select.component';
import { InputComponent } from '../../shared/components/controls/input/input.component';
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
  ],
})
export class BooksPageModule {}
