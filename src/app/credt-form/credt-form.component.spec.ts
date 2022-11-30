import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredtFormComponent } from './credt-form.component';

describe('CredtFormComponent', () => {
  let component: CredtFormComponent;
  let fixture: ComponentFixture<CredtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
