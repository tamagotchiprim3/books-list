import { IColumn } from 'src/app/shared/interfaces/column.interface';

export const TABLE_COLUMNS: IColumn[] = [
  { headerName: 'Title', fieldKey: 'title' },
  { headerName: 'Author', fieldKey: 'author' },
  { headerName: 'Number of pages', fieldKey: 'pageCount' },
  { headerName: 'Language', fieldKey: 'language' },
  { headerName: 'Genre', fieldKey: 'genre' },
];
