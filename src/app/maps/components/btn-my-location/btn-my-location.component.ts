import { Component } from '@angular/core';
import {MapService} from "../../services/map.service";
import {PlacesService} from "../../services/places.service";

@Component({
  selector: 'btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {
  constructor(private mapService: MapService, private placeService: PlacesService) {
  }

  goToMyLocation() {
    if(!this.mapService.isMapReady) throw Error ('no ahi ubicacion de usuario');
    if(!this.placeService.isUserLocationReady) throw Error ('no ahi mapa disponible');
    this.mapService.flyto(this.placeService.useLocation!);
  }
}
