import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5InvestigadoresComponent } from './top5-investigadores.component';

describe('Top5InvestigadoresComponent', () => {
  let component: Top5InvestigadoresComponent;
  let fixture: ComponentFixture<Top5InvestigadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5InvestigadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5InvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
