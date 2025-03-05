import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInternoFormBottomSheetComponent } from './item-interno-form-bottom-sheet.component';

describe('ItemInternoFormBottomSheetComponent', () => {
  let component: ItemInternoFormBottomSheetComponent;
  let fixture: ComponentFixture<ItemInternoFormBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInternoFormBottomSheetComponent]
    });
    fixture = TestBed.createComponent(ItemInternoFormBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
