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
// services
import {PlayerService} from "./services/player.service";
import {CompetitionService} from "./services/competition.service";
// components
import { CompetitionComponent } from './components/competitions/competition.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayerListComponent} from "./components/player-list/player-list.component";
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PlayerListComponent,
    CompetitionComponent,
    NotFoundComponent,
    PlayerDetailComponent,
    PlayerSearchComponent
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
  providers: [PlayerService, CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
