import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {Map, Popup, Marker} from 'mapbox-gl';
import {MapService} from "../../services/map.service";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDIV') public mapDivElement!:ElementRef;

  constructor(private placeService:PlacesService, private mapService: MapService) {
  }

  ngAfterViewInit():void {
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placeService.useLocation, // starting position [lng, lat]
      zoom: 18, // starting zoom
    });

    const popup = new Popup().setHTML(`<h6>Aqui estoy</h6><span>Estoy en este lugar del mundo</span>`);
    new Marker({color: 'red'}).setLngLat(this.placeService.useLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }


}
