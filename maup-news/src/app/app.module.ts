import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsComponentsModule} from "../assets/ui/news-components/news-components.module";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NewsComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
