import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorsCardComponent } from '../authors-card/authors-card.component';

@Component({
  selector: 'app-create-author-card',
  templateUrl: './create-author-card.component.html',
  styleUrls: ['./create-author-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAuthorCardComponent {
  public authorControl: FormControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AuthorsCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private cdr: ChangeDetectorRef
  ) {}

  public back(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    console.log('this.authorControl: ', this.authorControl);
    if (
      JSON.parse(localStorage.getItem('authors')).includes(
        this.authorControl.value
      )
    ) {
      this.authorControl.setErrors({ similar: true });
    }
    if (!this.authorControl.valid) {
      this.authorControl.markAllAsTouched();
      return;
    }
    this.cdr.markForCheck();
    this.dialogRef.close(this.authorControl.getRawValue());
  }
}
