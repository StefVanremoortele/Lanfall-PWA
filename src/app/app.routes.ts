import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CompetitionDetailsComponent} from "./components/competition-details/competition-details.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'competition-details', pathMatch: 'full'},
  {path: 'competition-details', component: CompetitionDetailsComponent},
  {path: "**", component: NotFoundComponent,  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
