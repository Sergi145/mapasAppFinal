import { Component } from '@angular/core';
import {PlacesService} from "../../services/places.service";



@Component({
  selector: 'map-pages',
  templateUrl: './map-pages.component.html',
  styleUrl: './map-pages.component.css'
})
export class MapPagesComponent {
    constructor(private placeService:PlacesService) {
    }

    get isUserLocationReady() {
      return this.placeService.isUserLocationReady;
    }
}
