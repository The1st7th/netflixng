import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTopComponent } from './main-top/main-top.component';
import { MainMidComponent } from './main-mid/main-mid.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {routing} from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTopComponent,
    MainMidComponent,
    MainFooterComponent,
    MovieListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

