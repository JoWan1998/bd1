import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasTerritorialesComponent } from './areas-territoriales.component';

describe('AreasTerritorialesComponent', () => {
  let component: AreasTerritorialesComponent;
  let fixture: ComponentFixture<AreasTerritorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasTerritorialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasTerritorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
