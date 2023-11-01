import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsComponentsModule} from "../assets/ui/news-components/news-components.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NewsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
