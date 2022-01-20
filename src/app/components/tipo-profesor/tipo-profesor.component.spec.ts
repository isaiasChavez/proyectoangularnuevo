import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProfesorComponent } from './tipo-profesor.component';

describe('TipoProfesorComponent', () => {
  let component: TipoProfesorComponent;
  let fixture: ComponentFixture<TipoProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
