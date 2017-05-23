import {NgModule} from "@angular/core";
import { DatepickerModule } from "angular2-material-datepicker";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdProgressSpinnerModule,
  MdProgressBarModule

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    DatepickerModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdListModule,
    MdProgressBarModule
  ],
  exports: [
    DatepickerModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdProgressBarModule
  ],
  declarations: []
})
export class MaterialModule {
}
