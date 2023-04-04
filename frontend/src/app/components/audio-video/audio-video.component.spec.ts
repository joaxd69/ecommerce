import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoComponent } from './audio-video.component';

describe('AudioVideoComponent', () => {
  let component: AudioVideoComponent;
  let fixture: ComponentFixture<AudioVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
