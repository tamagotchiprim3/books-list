import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorsCardComponent } from '../authors-card/authors-card.component';

@Component({
  selector: 'app-edit-author-card',
  templateUrl: './edit-author-card.component.html',
  styleUrls: ['./edit-author-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAuthorCardComponent implements OnInit {
  public authorControl: FormControl = new FormControl();
  public submittedAuthor: string;

  constructor(
    public dialogRef: MatDialogRef<AuthorsCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { author: string }
  ) {}

  ngOnInit(): void {
    this.authorControl.setValue(this.data);
  }

  public back(): void {
    this.dialogRef.close();
  }
}
