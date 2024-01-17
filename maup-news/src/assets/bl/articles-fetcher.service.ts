// Purpose: Service for fetching articles from a JSON file.
import { Injectable } from '@angular/core';
import { Article } from "./model/model";
import { firstValueFrom, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PeriodicElement } from "../ui/news-components/news-table/news-table.component";

const articlesUrl = 'https://drive.google.com/file/d/1AM7cToPAYpvDORDXdWp_0lj7NfxAeBrt/view?usp=sharing';
export const headers: HttpHeaders = new HttpHeaders({
  'Access-Control-Allow-Origin':'*',
});

const articlesMock: Article[] = [
  {id: 1, title: 'first', imageUrl: 'https://pspaudit.ua/wp-content/uploads/2021/06/audit-sing.jpg', description: 'first description', text: 'first text'},
  {id: 1, title: 'second', imageUrl: 'https://jurkniga.ua/wa-data/public/shop/plugins/webp/products/01/28/12801/15104/15104.383x0@2x.webp', description: 'second description', text: 'second text'},

];


@Injectable({
  providedIn: 'root'
})

export class ArticlesFetcherService {

  constructor(private http: HttpClient) { }

  fetchArticles(): Promise<{ articles: Article[] }> {
    return Promise.resolve({ articles: articlesMock });
    // return firstValueFrom(
    //   this.http.get<{ articles: Article[] }>(articlesUrl, {headers})
    //     .pipe(
    //       retry(3)
    //     )
    // );
  }
}
