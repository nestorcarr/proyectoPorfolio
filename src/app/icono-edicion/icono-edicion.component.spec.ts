import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoEdicionComponent } from './icono-edicion.component';

describe('IconoEdicionComponent', () => {
  let component: IconoEdicionComponent;
  let fixture: ComponentFixture<IconoEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
