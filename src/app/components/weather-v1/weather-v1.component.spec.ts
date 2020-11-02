import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherV1Component } from './weather-v1.component';

describe('WeatherV1Component', () => {
  let component: WeatherV1Component;
  let fixture: ComponentFixture<WeatherV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
