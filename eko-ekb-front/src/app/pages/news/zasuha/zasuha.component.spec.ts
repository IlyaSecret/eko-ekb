import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasuhaComponent } from './zasuha.component';

describe('ZasuhaComponent', () => {
  let component: ZasuhaComponent;
  let fixture: ComponentFixture<ZasuhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZasuhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZasuhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
