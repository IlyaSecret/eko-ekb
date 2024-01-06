import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallenListyaComponent } from './fallen-listya.component';

describe('FallenListyaComponent', () => {
  let component: FallenListyaComponent;
  let fixture: ComponentFixture<FallenListyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallenListyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallenListyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
