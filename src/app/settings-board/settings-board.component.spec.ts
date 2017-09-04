import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBoardComponent } from './settings-board.component';

describe('SettingsBoardComponent', () => {
  let component: SettingsBoardComponent;
  let fixture: ComponentFixture<SettingsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
