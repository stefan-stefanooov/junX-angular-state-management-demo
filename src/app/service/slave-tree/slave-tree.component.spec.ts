import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveTreeComponent } from './slave-tree.component';

describe('SlaveTreeComponent', () => {
  let component: SlaveTreeComponent;
  let fixture: ComponentFixture<SlaveTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
