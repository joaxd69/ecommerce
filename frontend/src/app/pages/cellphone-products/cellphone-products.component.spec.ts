import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneProductsComponent } from './cellphone-products.component';

describe('CellphoneProductsComponent', () => {
  let component: CellphoneProductsComponent;
  let fixture: ComponentFixture<CellphoneProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphoneProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellphoneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
