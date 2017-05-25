import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAtSeatComponent } from './order-at-seat.component';

describe('OrderAtSeatComponent', () => {
  let component: OrderAtSeatComponent;
  let fixture: ComponentFixture<OrderAtSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAtSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAtSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
