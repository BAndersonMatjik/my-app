import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeUiComponent } from './joke-ui.component';

describe('JokeUiComponent', () => {
  let component: JokeUiComponent;
  let fixture: ComponentFixture<JokeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
