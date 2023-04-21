import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsTitlesComponent } from './sections-titles.component';

describe('SectionsTitlesComponent', () => {
  let component: SectionsTitlesComponent;
  let fixture: ComponentFixture<SectionsTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
