import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdAutocompleteModule
  

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdAutocompleteModule
  ],
  exports: [
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdAutocompleteModule,
  ],
  declarations: [ ]
})
export class MaterialModule {
}
