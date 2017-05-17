import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CompetitionDetailsComponent} from "./components/competition-details/competition-details.component";
import {HomeComponent} from "./components/home/home.component";
import {UpcomingGamesComponent} from "./components/upcoming-games/upcoming-games.component";
import {PlayersListComponent} from "./components/players-list/players-list.component";
import {PlayersRateComponent} from "./components/players-rate/players-rate.component";
import {PlayerDetailComponent} from "./components/player-detail/player-detail.component";


const appRoutes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},  
  {path: 'Competitions', component: CompetitionDetailsComponent},
  {path: 'ListPlayers', component: PlayersListComponent},
  {path: 'RatePlayers', component: PlayersRateComponent},
  {path: "player/:id", component: PlayerDetailComponent},
  {path: "**", component: NotFoundComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
