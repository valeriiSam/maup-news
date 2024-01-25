import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTableCellComponent } from './news-table-cell.component';

describe('NewsTableCellComponent', () => {
  let component: NewsTableCellComponent;
  let fixture: ComponentFixture<NewsTableCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsTableCellComponent]
    });
    fixture = TestBed.createComponent(NewsTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
