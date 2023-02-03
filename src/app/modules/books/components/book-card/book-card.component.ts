import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() public book: IBook;
}
