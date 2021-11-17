import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRatesComponent } from './selected-rates.component';

describe('SelectedRatesComponent', () => {
  let component: SelectedRatesComponent;
  let fixture: ComponentFixture<SelectedRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
