import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokladComponent } from './doklad.component';

describe('DokladComponent', () => {
  let component: DokladComponent;
  let fixture: ComponentFixture<DokladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokladComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
