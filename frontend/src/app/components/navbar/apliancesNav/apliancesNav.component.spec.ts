import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApliancesComponent } from './apliancesNav.component';

describe('ApliancesComponent', () => {
  let component: ApliancesComponent;
  let fixture: ComponentFixture<ApliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
