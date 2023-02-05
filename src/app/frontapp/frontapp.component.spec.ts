import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontappComponent } from './frontapp.component';

describe('FrontappComponent', () => {
  let component: FrontappComponent;
  let fixture: ComponentFixture<FrontappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
