import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRepresentComponent } from './product-represent.component';

describe('ProductRepresentComponent', () => {
  let component: ProductRepresentComponent;
  let fixture: ComponentFixture<ProductRepresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRepresentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
