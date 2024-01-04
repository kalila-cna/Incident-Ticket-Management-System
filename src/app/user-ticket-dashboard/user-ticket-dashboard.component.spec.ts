import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketDashboardComponent } from './user-ticket-dashboard.component';

describe('UserTicketDashboardComponent', () => {
  let component: UserTicketDashboardComponent;
  let fixture: ComponentFixture<UserTicketDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTicketDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTicketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
