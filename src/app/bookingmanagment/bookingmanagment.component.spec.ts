import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingmanagmentComponent} from './bookingmanagment.component';

describe('BookingmanagmentComponent', () => {
  let component: BookingmanagmentComponent;
  let fixture: ComponentFixture<BookingmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingmanagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
