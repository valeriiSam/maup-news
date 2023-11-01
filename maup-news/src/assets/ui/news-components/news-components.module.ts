import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTableComponent } from './news-table/news-table.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
    declarations: [
        NewsTableComponent
    ],
    exports: [
        NewsTableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class NewsComponentsModule { }
