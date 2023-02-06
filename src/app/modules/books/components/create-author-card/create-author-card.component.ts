import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorsCardComponent } from '../authors-card/authors-card.component';

@Component({
  selector: 'app-create-author-card',
  templateUrl: './create-author-card.component.html',
  styleUrls: ['./create-author-card.component.scss'],
})
export class CreateAuthorCardComponent {
  public authorControl: FormControl = new FormControl();
  public submittedAuthor: string;

  constructor(
    public dialogRef: MatDialogRef<AuthorsCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
  public back(): void {
    this.dialogRef.close();
  }

  // public submit(): void {
  //   if (this.authorControl.valid) {
  //     this.data = this.authorControl.getRawValue();
  //     this.dialogRef.close();
  //   }
  //   return;
  // }
}
