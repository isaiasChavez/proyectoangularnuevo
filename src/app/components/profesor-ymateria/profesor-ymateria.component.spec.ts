import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorYMateriaComponent } from './profesor-ymateria.component';

describe('ProfesorYMateriaComponent', () => {
  let component: ProfesorYMateriaComponent;
  let fixture: ComponentFixture<ProfesorYMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorYMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorYMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
