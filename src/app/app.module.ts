import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTopComponent } from './main-top/main-top.component';
import { MainMidComponent } from './main-mid/main-mid.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {routing} from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpModule } from '@angular/http';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { masterFirebaseConfig } from './apikeys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
@NgModule({
  declarations: [
    AppComponent,
    MainTopComponent,
    MainMidComponent,
    MainFooterComponent,
    MovieListComponent,
    MainPageComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

