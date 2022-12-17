import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveInvoicesComponent } from './remove-invoices.component';

describe('RemoveInvoicesComponent', () => {
  let component: RemoveInvoicesComponent;
  let fixture: ComponentFixture<RemoveInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
