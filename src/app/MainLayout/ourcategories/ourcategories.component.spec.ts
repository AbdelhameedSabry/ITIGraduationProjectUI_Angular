import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcategoriesComponent } from './ourcategories.component';

describe('OurcategoriesComponent', () => {
  let component: OurcategoriesComponent;
  let fixture: ComponentFixture<OurcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
