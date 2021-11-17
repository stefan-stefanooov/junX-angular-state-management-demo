import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveFourComponent } from './slave-four.component';

describe('SlaveFourComponent', () => {
  let component: SlaveFourComponent;
  let fixture: ComponentFixture<SlaveFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
