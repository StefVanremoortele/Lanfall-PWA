import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CompetitionComponent} from "./components/competitions/competition.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PlayerListComponent} from "./components/player-list/player-list.component";
import {PlayerDetailComponent} from "./components/player-detail/player-detail.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'players', pathMatch: 'full'},
  {path: 'competitions', component: CompetitionComponent},
  {path: 'players', component: PlayerListComponent},
  {path: 'player/:id', component: PlayerDetailComponent},
  {path: "**", component: NotFoundComponent,  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
