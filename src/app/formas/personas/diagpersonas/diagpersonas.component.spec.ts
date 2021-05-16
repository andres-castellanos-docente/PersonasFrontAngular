import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagpersonasComponent } from './diagpersonas.component';

describe('DiagpersonasComponent', () => {
  let component: DiagpersonasComponent;
  let fixture: ComponentFixture<DiagpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagpersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
