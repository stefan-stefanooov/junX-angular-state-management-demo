import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveOneComponent } from './slave-one.component';

describe('SlaveOneComponent', () => {
  let component: SlaveOneComponent;
  let fixture: ComponentFixture<SlaveOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
