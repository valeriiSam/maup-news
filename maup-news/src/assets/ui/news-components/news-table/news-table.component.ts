import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ArticlesFetcherService } from "../../../bl/articles-fetcher.service";
import { Article } from "../../../bl/model/model";

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articlesFetcher: ArticlesFetcherService) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  private fetchArticles(): void {
    this.articlesFetcher.fetchArticles()
      .then(articles => {
        this.articles = articles.articles;
      }).catch(error => {
        console.error(error);
    });
  }

  onArticleClick(article: Article): void {
    this.articlesFetcher.openArticleView(article);
  }
}
