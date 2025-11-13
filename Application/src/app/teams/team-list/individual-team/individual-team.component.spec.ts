import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTeamComponent } from './individual-team.component';

describe('IndividualTeamComponent', () => {
  let component: IndividualTeamComponent;
  let fixture: ComponentFixture<IndividualTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
