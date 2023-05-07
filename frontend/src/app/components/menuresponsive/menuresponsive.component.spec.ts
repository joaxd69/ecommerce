import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuresponsiveComponent } from './menuresponsive.component';

describe('MenuresponsiveComponent', () => {
  let component: MenuresponsiveComponent;
  let fixture: ComponentFixture<MenuresponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuresponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
