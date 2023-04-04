import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneComponent } from './cellphone.component';

describe('CellphoneComponent', () => {
  let component: CellphoneComponent;
  let fixture: ComponentFixture<CellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
