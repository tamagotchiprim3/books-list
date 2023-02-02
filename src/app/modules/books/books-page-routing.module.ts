import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books-page/books-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'books', pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksPageComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
