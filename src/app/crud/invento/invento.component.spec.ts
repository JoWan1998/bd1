import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoComponent } from './invento.component';

describe('InventoComponent', () => {
  let component: InventoComponent;
  let fixture: ComponentFixture<InventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
