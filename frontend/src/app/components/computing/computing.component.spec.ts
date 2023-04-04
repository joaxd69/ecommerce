import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingComponent } from './computing.component';

describe('ComputingComponent', () => {
  let component: ComputingComponent;
  let fixture: ComponentFixture<ComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
