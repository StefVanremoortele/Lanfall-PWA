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
import { CompetitionDetailsComponent } from "./components/competitions/competition-details/competition-details.component";
import { CompetitionsComponent } from "./components/competitions/competitions.component";
import { HomeComponent } from "./components/home/home.component";
//services
import { CompetitionsService } from "./services/competitions.service";
import { PlayersService } from "./services/players.service";

import {PlayersListComponent} from "./components/players-list/players-list.component";
import {PlayersRateComponent} from "./components/players-rate/players-rate.component";
import {PlayerDetailComponent} from "./components/player-detail/player-detail.component";

// in memory api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemPlayerService } from './services/in-memory-data.service';

  
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    CompetitionDetailsComponent,
    CompetitionsComponent,
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
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemPlayerService), // => angular-in-memory-api
  ],
  providers: [CompetitionsService, PlayersService ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
