import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class TextareaComponent
  implements ControlValueAccessor, OnInit, DoCheck
{
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorMessage: string;
  @Input() public width: string;
  @Input() public rows: number;

  public control = new FormControl();
  public onChange: (value: string) => void;
  public onTouched: () => void;

  constructor(private ngControl: NgControl, private cdr: ChangeDetectorRef) {
    ngControl.valueAccessor = this;
    if (ngControl.control) {
      this.control.setParent(ngControl.control.parent);
    }
  }

  ngOnInit(): void {
    this.initErrors();
    this.control.setValue(this.ngControl.control.value);
    this.control.valueChanges.subscribe((value: any) => {
      this.onChange(value);
    });
  }

  ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.touched) {
      this.control.markAsTouched();
      this.cdr.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: string): void {
    this.control.setValue(value);
    this.cdr.detectChanges();
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }
}
