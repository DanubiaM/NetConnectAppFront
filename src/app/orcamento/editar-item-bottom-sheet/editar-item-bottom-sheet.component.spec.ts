import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemBottomSheetComponent } from './editar-item-bottom-sheet.component';

describe('EditarItemBottomSheetComponent', () => {
  let component: EditarItemBottomSheetComponent;
  let fixture: ComponentFixture<EditarItemBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarItemBottomSheetComponent]
    });
    fixture = TestBed.createComponent(EditarItemBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
