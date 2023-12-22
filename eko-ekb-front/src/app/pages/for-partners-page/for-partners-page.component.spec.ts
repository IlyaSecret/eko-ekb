import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPartnersPageComponent } from './for-partners-page.component';

describe('ForPartnersPageComponent', () => {
  let component: ForPartnersPageComponent;
  let fixture: ComponentFixture<ForPartnersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPartnersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPartnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
