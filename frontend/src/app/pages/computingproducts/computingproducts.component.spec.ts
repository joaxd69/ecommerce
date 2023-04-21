import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingproductsComponent } from './computingproducts.component';

describe('ComputingproductsComponent', () => {
  let component: ComputingproductsComponent;
  let fixture: ComponentFixture<ComputingproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputingproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
