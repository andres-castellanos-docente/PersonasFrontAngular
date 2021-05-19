import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagconfComponent } from './diagconf.component';

describe('DiagconfComponent', () => {
  let component: DiagconfComponent;
  let fixture: ComponentFixture<DiagconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
