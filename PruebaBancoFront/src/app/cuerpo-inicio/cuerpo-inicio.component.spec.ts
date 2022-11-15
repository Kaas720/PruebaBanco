import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoInicioComponent } from './cuerpo-inicio.component';

describe('CuerpoInicioComponent', () => {
  let component: CuerpoInicioComponent;
  let fixture: ComponentFixture<CuerpoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
