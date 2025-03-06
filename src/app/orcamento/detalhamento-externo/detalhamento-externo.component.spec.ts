import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoExternoComponent } from './detalhamento-externo.component';

describe('DetalhamentoExternoComponent', () => {
  let component: DetalhamentoExternoComponent;
  let fixture: ComponentFixture<DetalhamentoExternoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhamentoExternoComponent]
    });
    fixture = TestBed.createComponent(DetalhamentoExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
