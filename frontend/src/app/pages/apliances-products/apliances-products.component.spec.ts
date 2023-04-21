import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApliancesProductsComponent } from './apliances-products.component';

describe('ApliancesProductsComponent', () => {
  let component: ApliancesProductsComponent;
  let fixture: ComponentFixture<ApliancesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApliancesProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApliancesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
