import { Component, Input } from '@angular/core';
import { Article } from "../../../bl/model/model";

@Component({
  selector: 'app-news-table-cell',
  templateUrl: './news-table-cell.component.html',
  styleUrls: ['./news-table-cell.component.css']
})
export class NewsTableCellComponent {
  @Input() article: Article;

  constructor() { }
}
