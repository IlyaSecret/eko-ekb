import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermoComponent } from './dermo.component';

describe('DermoComponent', () => {
  let component: DermoComponent;
  let fixture: ComponentFixture<DermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
