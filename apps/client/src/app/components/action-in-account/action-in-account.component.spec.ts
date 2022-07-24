import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInAccountComponent } from './action-in-account.component';

describe('ActionInAccountComponent', () => {
  let component: ActionInAccountComponent;
  let fixture: ComponentFixture<ActionInAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionInAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
