import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingComponent } from './gamingNav.component';

describe('GamingComponent', () => {
  let component: GamingComponent;
  let fixture: ComponentFixture<GamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
