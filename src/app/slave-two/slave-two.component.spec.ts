import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveTwoComponent } from './slave-two.component';

describe('SlaveTwoComponent', () => {
  let component: SlaveTwoComponent;
  let fixture: ComponentFixture<SlaveTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
