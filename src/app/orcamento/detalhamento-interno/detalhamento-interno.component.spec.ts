import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoInternoComponent } from './detalhamento-interno.component';

describe('DetalhamentoInternoComponent', () => {
  let component: DetalhamentoInternoComponent;
  let fixture: ComponentFixture<DetalhamentoInternoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhamentoInternoComponent]
    });
    fixture = TestBed.createComponent(DetalhamentoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
