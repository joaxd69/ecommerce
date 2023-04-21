import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingProductsComponent } from './gaming-products.component';

describe('GamingProductsComponent', () => {
  let component: GamingProductsComponent;
  let fixture: ComponentFixture<GamingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
