import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPlayerComponent } from './v-player.component';

describe('VPlayerComponent', () => {
  let component: VPlayerComponent;
  let fixture: ComponentFixture<VPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
