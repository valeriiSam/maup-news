// Purpose: Service for fetching articles from a JSON file.
import { Injectable } from '@angular/core';
import { Article } from "./model/model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { NewsPageComponent } from "../ui/news-components/news-page/news-page.component";
import { catchError, firstValueFrom, retry, tap } from "rxjs";

const articlesUrl = 'https://drive.google.com/file/d/1AM7cToPAYpvDORDXdWp_0lj7NfxAeBrt/view?usp=sharing';
export const headers: HttpHeaders = new HttpHeaders({
  'Access-Control-Allow-Origin':'*',
});

@Injectable({
  providedIn: 'root'
})

export class ArticlesFetcherService {
  articlePageRef: MatDialogRef<NewsPageComponent> | null = null

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  fetchArticles(): Promise<{ articles: Article[] }> {
    const url = `https://bafybeid3ksxv55bef36rjjedzqefhgx3xw5ram4xsb3mmx3emyf454wal4.ipfs.w3s.link/news.json`;
    return firstValueFrom(
      this.http.get<{ articles: Article[] }>(url)
        .pipe(
          tap((data: { articles: Article[] }) => {
            localStorage.setItem('articles', JSON.stringify(data.articles));
          }),
          retry(3),
          catchError((err) => {
            console.log('error in fetchArticles()')
            console.error(err);
            const cachedArticles = localStorage.getItem('articles');
            if (cachedArticles) {
              return Promise.resolve({ articles: JSON.parse(cachedArticles) });
            } else {
              return Promise.reject(err);
            }
          })
        )
    );
  }

  openArticleView(article: Article): void {
    if (!this.articlePageRef) {
      this.articlePageRef = this.dialog.open(NewsPageComponent, {
        data: article,
        height: "calc(100% - 20px)",
        width: "calc(100% - 20px)",
        maxWidth: "100%",
        maxHeight: "100%",
        panelClass: 'news-page-dialog',
        enterAnimationDuration: 500
      });

      this.articlePageRef.afterClosed().subscribe(result => {
        console.log('The news dialog was closed');
        this.articlePageRef = null;
      });
    }
  }
}
