import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  standalone: true,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
  ],
})
export class SliderComponent implements OnChanges {
  @Input() public label: string;
  @Input() public errorMessage: string;
  @Input() public width: string = '300px';
  @Input() public min: number;
  @Input() public max: number;

  public control: FormGroup;
  public onChange: (value: string) => void;
  public onTouched: () => void;

  constructor(
    private fb: FormBuilder,
    private ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    this.control = this.fb.group({
      lowerValue: [this.min],
      higherValue: [this.max],
    });
    ngControl.valueAccessor = this;
    if (ngControl.control) {
      this.control.setParent(ngControl.control.parent);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['min'] && changes['min'].currentValue) {
      this.control.patchValue({ lowerValue: this.min });
    }
    if (changes['max'] && changes['max'].currentValue) {
      this.control.patchValue({ higherValue: this.max });
    }
  }

  ngOnInit(): void {
    this.initErrors();
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

  public writeValue(value: { lowerValue: number; higherValue: number }): void {
    if (value) {
      this.control.setValue(value);
      this.cdr.detectChanges();
    }
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
