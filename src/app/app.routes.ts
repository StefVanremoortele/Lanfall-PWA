import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {CompetitionComponent} from "./components/competitions/competition.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PlayerListComponent} from "./components/player-list/player-list.component";
import {PlayerDetailComponent} from "./components/player-detail/player-detail.component";
import {CompetitionDetailComponent} from "./components/competitions/competition-detail/competition-detail.component";
import {OrderAtSeatComponent} from "./components/order-at-seat/order-at-seat.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'competitions', component: CompetitionComponent},
  {path: 'players', component: PlayerListComponent},
  {path: 'player/:id', component: PlayerDetailComponent},
  {path: 'competition/:id', component: CompetitionDetailComponent},
  {path: 'orderAtSeat', component: OrderAtSeatComponent},
  {path: "**", component: NotFoundComponent,  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
