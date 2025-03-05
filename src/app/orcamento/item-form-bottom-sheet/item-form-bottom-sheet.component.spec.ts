import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormBottomSheetComponent } from './item-form-bottom-sheet.component';

describe('ItemFormBottomSheetComponent', () => {
  let component: ItemFormBottomSheetComponent;
  let fixture: ComponentFixture<ItemFormBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFormBottomSheetComponent]
    });
    fixture = TestBed.createComponent(ItemFormBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
