import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule, BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {routing} from "./app.routes";
//components
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompetitionDetailsComponent } from "./components/competition-details/competition-details.component";
import { UpcomingGamesComponent } from "./components/upcoming-games/upcoming-games.component";
import { HomeComponent } from "./components/home/home.component";
//services
import { CompetitionsService } from "./services/competitions.service";
import { PlayersService } from "./services/players.service";

import {PlayersListComponent} from "./components/players-list/players-list.component";
import {PlayersRateComponent} from "./components/players-rate/players-rate.component";
import {PlayerDetailComponent} from "./components/player-detail/player-detail.component";

  
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    CompetitionDetailsComponent,
    UpcomingGamesComponent,
    NotFoundComponent,
    PlayersListComponent,
    PlayersRateComponent,
    PlayerDetailComponent

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
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [CompetitionsService, PlayersService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
