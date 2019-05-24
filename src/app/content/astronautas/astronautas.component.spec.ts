import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautasComponent } from './astronautas.component';

describe('AstronautasComponent', () => {
  let component: AstronautasComponent;
  let fixture: ComponentFixture<AstronautasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronautasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
