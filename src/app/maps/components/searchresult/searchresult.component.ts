import { Component } from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {Feature, Properties} from "../../interfaces/places.interfaces";
import {MapService} from "../../services/map.service";


@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})
export class SearchresultComponent {
    constructor(private placeService: PlacesService, private mapService: MapService) {
    }

   public selectedId:string ='';

  get isLoadingPlaces() :boolean{
      return this.placeService.isLoadingPlaces;
  }

  get places():Feature[] {
      return this.placeService.places;
  }

  flyTo (place: Feature) {
    this.selectedId= place.id;

    const [lng, lat ] = place.center;
      this.mapService.flyto([lng,lat]);
  }

  getDirections (place:Feature) {

    if(!this.placeService.useLocation) throw Error ('no ahi useRlOCATION')

    this.placeService.deletePlaces();
    const start= this.placeService.useLocation;
    const end = place.center as  [number,number];

    this.mapService.getRouteBetweenPoints(start,end);
  }

}
