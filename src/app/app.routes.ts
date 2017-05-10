import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CompetitionDetailsComponent} from "./components/competition-details/competition-details.component";
import {HomeComponent} from "./components/home/home.component";
import {NowPlayingComponent} from "./components/now-playing/now-playing.component";
import {UpcomingGamesComponent} from "./components/upcoming-games/upcoming-games.component";
import {OrderAtYourSeatComponent} from "./components/order-at-your-seat/order-at-your-seat.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},  
  {path: 'OrderAtYourSeat', component: OrderAtYourSeatComponent},  
  {path: 'Competitions', component: CompetitionDetailsComponent},
  {path: 'Now', component: NowPlayingComponent},
  {path: 'Upcoming', component: UpcomingGamesComponent},
  {path: "**", component: NotFoundComponent,  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
