import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule, BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompetitionDetailsComponent } from "./components/competition-details/competition-details.component";
import { NowPlayingComponent } from "./components/now-playing/now-playing.component";
import { UpcomingGamesComponent } from "./components/upcoming-games/upcoming-games.component";
import { HomeComponent } from "./components/home/home.component";
import { OrderAtYourSeatComponent } from "./components/order-at-your-seat/order-at-your-seat.component";

import { DrinksService } from "./services/drinks.service";
import { PlayersService } from "./services/players.service";

import {PlayersVoteComponent} from "./components/players-vote/players-vote.component";
import {PlayersListComponent} from "./components/players-list/players-list.component";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    OrderAtYourSeatComponent,
    CompetitionDetailsComponent,
    NowPlayingComponent,
    UpcomingGamesComponent,
    NotFoundComponent,
    PlayersListComponent,
    PlayersVoteComponent
  ],
  imports: [
    RouterModule,
    routing,
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DrinksService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
