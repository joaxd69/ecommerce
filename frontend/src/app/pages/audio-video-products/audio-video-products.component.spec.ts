import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoProductsComponent } from './audio-video-products.component';

describe('AudioVideoProductsComponent', () => {
  let component: AudioVideoProductsComponent;
  let fixture: ComponentFixture<AudioVideoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVideoProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioVideoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
