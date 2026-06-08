import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyManagementComponent } from './PropertyManagementComponent';

describe('PropertyManagementComponent', () => {
  let component: PropertyManagementComponent;
  let fixture: ComponentFixture<PropertyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
