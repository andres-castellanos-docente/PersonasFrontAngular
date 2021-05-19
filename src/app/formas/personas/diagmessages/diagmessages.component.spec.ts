import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagmessagesComponent } from './diagmessages.component';

describe('DiagmessagesComponent', () => {
  let component: DiagmessagesComponent;
  let fixture: ComponentFixture<DiagmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
