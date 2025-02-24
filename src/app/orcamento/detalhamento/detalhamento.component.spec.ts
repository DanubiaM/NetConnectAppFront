import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoComponent } from './detalhamento.component';

describe('DetalhamentoComponent', () => {
  let component: DetalhamentoComponent;
  let fixture: ComponentFixture<DetalhamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhamentoComponent]
    });
    fixture = TestBed.createComponent(DetalhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
