import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveFiveComponent } from './slave-five.component';

describe('SlaveFiveComponent', () => {
  let component: SlaveFiveComponent;
  let fixture: ComponentFixture<SlaveFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
