import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSystemComponent } from './data-system.component';

describe('DataSystemComponent', () => {
  let component: DataSystemComponent;
  let fixture: ComponentFixture<DataSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
