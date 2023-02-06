import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorCardComponent } from './edit-author-card.component';

describe('EditAuthorCardComponent', () => {
  let component: EditAuthorCardComponent;
  let fixture: ComponentFixture<EditAuthorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuthorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
