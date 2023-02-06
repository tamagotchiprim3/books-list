import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorCardComponent } from './create-author-card.component';

describe('CreateAuthorCardComponent', () => {
  let component: CreateAuthorCardComponent;
  let fixture: ComponentFixture<CreateAuthorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
