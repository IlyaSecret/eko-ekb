import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoroedComponent } from './koroed.component';

describe('KoroedComponent', () => {
  let component: KoroedComponent;
  let fixture: ComponentFixture<KoroedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoroedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoroedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
