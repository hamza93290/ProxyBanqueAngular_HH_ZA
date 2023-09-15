import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeconseillerComponent } from './listeconseiller.component';

describe('ListeconseillerComponent', () => {
  let component: ListeconseillerComponent;
  let fixture: ComponentFixture<ListeconseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeconseillerComponent]
    });
    fixture = TestBed.createComponent(ListeconseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
