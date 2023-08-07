import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikaComponent } from './tika.component';

describe('TikaComponent', () => {
  let component: TikaComponent;
  let fixture: ComponentFixture<TikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TikaComponent]
    });
    fixture = TestBed.createComponent(TikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
