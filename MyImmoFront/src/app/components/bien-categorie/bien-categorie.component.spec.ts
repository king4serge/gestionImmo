import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienCategorieComponent } from './bien-categorie.component';

describe('BienCategorieComponent', () => {
  let component: BienCategorieComponent;
  let fixture: ComponentFixture<BienCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
