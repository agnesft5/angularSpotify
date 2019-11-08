import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSongListComponent } from './v-song-list.component';

describe('VSongListComponent', () => {
  let component: VSongListComponent;
  let fixture: ComponentFixture<VSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
