import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VBibliotecaComponent } from './v-biblioteca.component';

describe('VBibliotecaComponent', () => {
  let component: VBibliotecaComponent;
  let fixture: ComponentFixture<VBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
