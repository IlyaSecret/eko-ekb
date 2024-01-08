import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkbBeachComponent } from './ekb-beach.component';

describe('EkbBeachComponent', () => {
  let component: EkbBeachComponent;
  let fixture: ComponentFixture<EkbBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkbBeachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkbBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
