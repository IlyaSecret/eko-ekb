import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cop28Component } from './cop28.component';

describe('Cop28Component', () => {
  let component: Cop28Component;
  let fixture: ComponentFixture<Cop28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cop28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cop28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
