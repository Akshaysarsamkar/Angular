import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleDetailsComponent } from './show-single-details.component';

describe('ShowSingleDetailsComponent', () => {
  let component: ShowSingleDetailsComponent;
  let fixture: ComponentFixture<ShowSingleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSingleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
