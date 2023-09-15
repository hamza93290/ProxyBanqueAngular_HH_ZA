import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecomptesComponent } from './listecomptes.component';

describe('ListecomptesComponent', () => {
  let component: ListecomptesComponent;
  let fixture: ComponentFixture<ListecomptesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecomptesComponent]
    });
    fixture = TestBed.createComponent(ListecomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
