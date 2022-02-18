import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveThreeComponent } from './slave-three.component';

describe('SlaveThreeComponent', () => {
  let component: SlaveThreeComponent;
  let fixture: ComponentFixture<SlaveThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
