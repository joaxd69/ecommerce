import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesProductsComponent } from './accesories-products.component';

describe('AccesoriesProductsComponent', () => {
  let component: AccesoriesProductsComponent;
  let fixture: ComponentFixture<AccesoriesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriesProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
