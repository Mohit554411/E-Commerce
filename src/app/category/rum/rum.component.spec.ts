import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumComponent } from './rum.component';

describe('RumComponent', () => {
  let component: RumComponent;
  let fixture: ComponentFixture<RumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
