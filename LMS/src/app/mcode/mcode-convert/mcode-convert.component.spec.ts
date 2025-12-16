import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McodeCOnvertComponent } from './mcode-convert.component';

describe('McodeCOnvertComponent', () => {
  let component: McodeCOnvertComponent;
  let fixture: ComponentFixture<McodeCOnvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McodeCOnvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McodeCOnvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
