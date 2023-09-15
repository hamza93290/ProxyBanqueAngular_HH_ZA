import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconseillerComponent } from './createconseiller.component';

describe('CreateconseillerComponent', () => {
  let component: CreateconseillerComponent;
  let fixture: ComponentFixture<CreateconseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateconseillerComponent]
    });
    fixture = TestBed.createComponent(CreateconseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
