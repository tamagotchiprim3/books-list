import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookCardComponent } from './create-book-card.component';

describe('CreateBookCardComponent', () => {
  let component: CreateBookCardComponent;
  let fixture: ComponentFixture<CreateBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
