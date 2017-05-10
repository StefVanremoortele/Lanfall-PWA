import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompetitionDetailsComponent } from "./components/competition-details/competition-details.component";
import { NowPlayingComponent } from "./components/now-playing/now-playing.component";
import { UpcomingGamesComponent } from "./components/upcoming-games/upcoming-games.component";
import { HomeComponent } from "./components/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    CompetitionDetailsComponent,
    NowPlayingComponent,
    UpcomingGamesComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    routing,
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
