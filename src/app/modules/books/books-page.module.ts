import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksPageRoutingModule } from './books-page-routing.module';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksFilterComponent } from './components/books-filter/books-filter.component';


@NgModule({
  declarations: [
    BooksPageComponent,
    BooksListComponent,
    BooksFilterComponent
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule
  ]
})
export class BooksPageModule { }
