import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2Component } from './ass2.component';

describe('Ass2Component', () => {
  let component: Ass2Component;
  let fixture: ComponentFixture<Ass2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
