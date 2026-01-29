import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorCard } from './consumidor-card';

describe('ConsumidorCard', () => {
  let component: ConsumidorCard;
  let fixture: ComponentFixture<ConsumidorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumidorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumidorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
