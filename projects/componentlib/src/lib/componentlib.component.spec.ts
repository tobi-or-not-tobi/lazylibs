import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlibComponent } from './componentlib.component';

describe('ComponentlibComponent', () => {
  let component: ComponentlibComponent;
  let fixture: ComponentFixture<ComponentlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
