import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetialsComponent } from './productdetials.component';

describe('ProductdetialsComponent', () => {
  let component: ProductdetialsComponent;
  let fixture: ComponentFixture<ProductdetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
