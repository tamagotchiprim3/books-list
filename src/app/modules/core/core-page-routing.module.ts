import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../books/books-page.module').then((m) => m.BooksPageModule),
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorePageRoutingModule {}
