import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesComponent } from './celularesNav.component';

describe('CelularesComponent', () => {
  let component: CelularesComponent;
  let fixture: ComponentFixture<CelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
