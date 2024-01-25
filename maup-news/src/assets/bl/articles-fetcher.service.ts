// Purpose: Service for fetching articles from a JSON file.
import { Injectable } from '@angular/core';
import { Article } from "./model/model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { NewsPageComponent } from "../ui/news-components/news-page/news-page.component";

const articlesUrl = 'https://drive.google.com/file/d/1AM7cToPAYpvDORDXdWp_0lj7NfxAeBrt/view?usp=sharing';
export const headers: HttpHeaders = new HttpHeaders({
  'Access-Control-Allow-Origin':'*',
});

const articlesMock: Article[] = [
  {id: 1, title: 'МАУП оголошує новий набір', imageUrl: 'https://pspaudit.ua/wp-content/uploads/2021/06/audit-sing.jpg', description: 'МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір', text: 'В Одеському інституті МАУП 24 січня 2024 року відбулася Підсумкова студентська наукова конференція за результатами 1 туру Всеукраїнського конкурсу студентських наукових робіт, в якій взяли участь 5 конкурсантів, їх наукові керівники та члени Конкурсної комісії.\n' +
      '\n' +
      'В ході конференції студенти презентували свої конкурсні роботи:\n' +
      '\n' +
      '-магістрант спеціальності Право заочної форми навчання, член наукового Клубу "Аристотель" Андрій Стець (наук.керівник - к.ю.н. Пєров А.П.) дослідив правові основи інноваційної підготовки кадрів Служби судової охорони, в якій він працює головним спеціалістом, командиром відділення особистої безпеки суддів;\n' +
      '\n' +
      '-студентка 4 курсу спеціальності Менеджмент, Голова Клубу "М:АНГО" Інна Денисова (наук.керівник - к.е.н. Кузнєцова О.В.) проаналізувала теоретичні аспекти дослідження інвестиційної діяльності;\n' +
      '\n' +
      '-студентка 3 курсу спеціальності Психологія, заступник Голови НТСМВ Єлизавета Шелепун (наук.керівник - к.психол.н., доцент Крюкова М.А.) дослідила роботу психолога з розвитку самовдосконалення майбутніх військових і презентувала результати власного психологічного опитування 50 курсантів Військової Академії - майбутніх українських офіцерів;\n' +
      '\n' +
      '-цікаве дослідження щодо проблем децентралізації влади в Україні, з компаративістським аналізом реформи децентралізації в Польщі та Україні, провела студентка 2 курсу спеціальності Право, член Клубу "ФЕМІДА" Віолетта Кривенко (наук.керівник - ад\'юнкт-проф. МКА Золотарьова О.А.).\n' +
      '\n' +
      'Наймолодшим учасником Конкурсу став студент 1 курсу спеціальності Право, член Клубу "ФЕМІДА" Георгій Цуркан (наук.керівник - к.і.н. Боган С.М.), який презентував свою конкурсну роботу на тему: "Створення і державно-правовий розвиток незалежних держав на уламках Австро-Угорської імперії".\n' +
      '\n' +
      'Конференція пройшла на високому рівні, члени Конкурсної комісії високо оцінили результати студентських досліджень, дали рекомендації по корегуванню технічних помилок в презентаціях, рекомендували переможцям взяти участь у Всеукраїнському конкурсі студентських та учнівських наукових робіт у Хмельницькому інституті МАУП навесні 2024 року.\n' +
      '\n' +
      'Високий рівень робіт, демонстрація новизни досліджень стало свідченням активної роботи студентських Клубів НТСМВ Одеського інституту МАУП. Дякуємо учасникам Конкурсу та бажаємо їм нових наукових досягнень!'},
  {id: 1, title: 'МАУП оголошує новий набір', imageUrl: 'https://jurkniga.ua/wa-data/public/shop/plugins/webp/products/01/28/12801/15104/15104.383x0@2x.webp', description: 'МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір МАУП оголошує новий набір', text: 'В Одеському інституті МАУП 24 січня 2024 року відбулася Підсумкова студентська наукова конференція за результатами 1 туру Всеукраїнського конкурсу студентських наукових робіт, в якій взяли участь 5 конкурсантів, їх наукові керівники та члени Конкурсної комісії.\n' +
      '\n' +
      'В ході конференції студенти презентували свої конкурсні роботи:\n' +
      '\n' +
      '-магістрант спеціальності Право заочної форми навчання, член наукового Клубу "Аристотель" Андрій Стець (наук.керівник - к.ю.н. Пєров А.П.) дослідив правові основи інноваційної підготовки кадрів Служби судової охорони, в якій він працює головним спеціалістом, командиром відділення особистої безпеки суддів;\n' +
      '\n' +
      '-студентка 4 курсу спеціальності Менеджмент, Голова Клубу "М:АНГО" Інна Денисова (наук.керівник - к.е.н. Кузнєцова О.В.) проаналізувала теоретичні аспекти дослідження інвестиційної діяльності;\n' +
      '\n' +
      '-студентка 3 курсу спеціальності Психологія, заступник Голови НТСМВ Єлизавета Шелепун (наук.керівник - к.психол.н., доцент Крюкова М.А.) дослідила роботу психолога з розвитку самовдосконалення майбутніх військових і презентувала результати власного психологічного опитування 50 курсантів Військової Академії - майбутніх українських офіцерів;\n' +
      '\n' +
      '-цікаве дослідження щодо проблем децентралізації влади в Україні, з компаративістським аналізом реформи децентралізації в Польщі та Україні, провела студентка 2 курсу спеціальності Право, член Клубу "ФЕМІДА" Віолетта Кривенко (наук.керівник - ад\'юнкт-проф. МКА Золотарьова О.А.).\n' +
      '\n' +
      'Наймолодшим учасником Конкурсу став студент 1 курсу спеціальності Право, член Клубу "ФЕМІДА" Георгій Цуркан (наук.керівник - к.і.н. Боган С.М.), який презентував свою конкурсну роботу на тему: "Створення і державно-правовий розвиток незалежних держав на уламках Австро-Угорської імперії".\n' +
      '\n' +
      'Конференція пройшла на високому рівні, члени Конкурсної комісії високо оцінили результати студентських досліджень, дали рекомендації по корегуванню технічних помилок в презентаціях, рекомендували переможцям взяти участь у Всеукраїнському конкурсі студентських та учнівських наукових робіт у Хмельницькому інституті МАУП навесні 2024 року.\n' +
      '\n' +
      'Високий рівень робіт, демонстрація новизни досліджень стало свідченням активної роботи студентських Клубів НТСМВ Одеського інституту МАУП. Дякуємо учасникам Конкурсу та бажаємо їм нових наукових досягнень!'},

];


@Injectable({
  providedIn: 'root'
})

export class ArticlesFetcherService {
  articlePageRef: MatDialogRef<NewsPageComponent> | null = null

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  fetchArticles(): Promise<{ articles: Article[] }> {
    return Promise.resolve({ articles: articlesMock });
  }

  openArticleView(article: Article): void {
    if (!this.articlePageRef) {
      this.articlePageRef = this.dialog.open(NewsPageComponent, {
        data: article,
        height: "calc(100% - 30px)",
        width: "calc(100% - 30px)",
        maxWidth: "100%",
        maxHeight: "100%",
        panelClass: 'news-page-dialog'
      });

      this.articlePageRef.afterClosed().subscribe(result => {
        console.log('The news dialog was closed');
        this.articlePageRef = null;
      });
    }
  }
}
