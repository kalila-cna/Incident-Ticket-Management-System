import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketDashboardComponent } from './admin-ticket-dashboard.component';

describe('AdminTicketDashboardComponent', () => {
  let component: AdminTicketDashboardComponent;
  let fixture: ComponentFixture<AdminTicketDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
