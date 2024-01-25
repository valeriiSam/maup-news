import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTableComponent } from './news-table/news-table.component';
import { MatTableModule } from '@angular/material/table';
import { NewsTableCellComponent } from './news-table-cell/news-table-cell.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";



@NgModule({
    declarations: [
        NewsTableComponent,
        NewsTableCellComponent,
        NewsPageComponent
    ],
    exports: [
        NewsTableComponent
    ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule

  ]
})
export class NewsComponentsModule { }
