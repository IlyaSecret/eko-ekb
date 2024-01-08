import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnKabanComponent } from './burn-kaban.component';

describe('BurnKabanComponent', () => {
  let component: BurnKabanComponent;
  let fixture: ComponentFixture<BurnKabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnKabanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurnKabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
