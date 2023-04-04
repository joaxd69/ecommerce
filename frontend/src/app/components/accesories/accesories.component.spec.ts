import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesComponent } from './accesories.component';

describe('AccesoriesComponent', () => {
  let component: AccesoriesComponent;
  let fixture: ComponentFixture<AccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
