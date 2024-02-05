import { Component, Inject } from '@angular/core';
import { Article } from "../../../bl/model/model";
import { MAT_DIALOG_DATA,  } from "@angular/material/dialog";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Article) {}
}
