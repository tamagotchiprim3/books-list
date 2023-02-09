import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IColumn } from '../../interfaces/column.interface';
@Component({
  standalone: true,
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [CommonModule, MatTableModule, MatPaginatorModule],
})
export class ListComponentComponent
  implements OnChanges, AfterViewInit, OnChanges
{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() public paginationSettings: number;
  @Input() public data: any[];
  @Input() public columns: IColumn[];
  @Output() public openedCard = new EventEmitter<any>();

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.dataSource = new MatTableDataSource<any>(this.data);
    }
    if (changes['columns'] && changes['columns'].currentValue) {
      this.displayedColumns = this.columns.map((elem) => elem.fieldKey);
    }
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  public openElement(element: any, index: number): void {
    if (index || index === 0) {
      this.openedCard.emit([element, index]);
    } else {
      this.openedCard.emit(element);
    }
  }
}
