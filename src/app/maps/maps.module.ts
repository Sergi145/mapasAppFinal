import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPagesComponent } from './pages/map-pages/map-pages.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';



@NgModule({
  declarations: [
    MapPagesComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
    SearchbarComponent,
    SearchresultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapPagesComponent
  ]
})
export class MapsModule { }
