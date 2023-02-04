import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IBook } from '../../interfaces/book.interface';
import { IColumn } from '../../interfaces/column.interface';

@Component({
  standalone: true,
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  imports: [CommonModule, MatTableModule],
})
export class ListComponentComponent implements OnChanges {
  @Input() public dataSource: IBook[];
  @Input() public columns: IColumn[];
  @Output() public openedBook = new EventEmitter<IBook>();

  public displayedColumns: string[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] && changes['columns'].currentValue) {
      this.displayedColumns = this.columns.map((elem) => elem.fieldKey);
    }
  }

  public openBook(element: IBook): void {
    this.openedBook.emit(element);
  }
}
