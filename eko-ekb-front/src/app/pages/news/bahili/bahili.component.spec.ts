import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahiliComponent } from './bahili.component';

describe('BahiliComponent', () => {
  let component: BahiliComponent;
  let fixture: ComponentFixture<BahiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahiliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
