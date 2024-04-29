import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Feature, PlacesResponse} from "../interfaces/places.interfaces";
import {PlacesApiClient} from "../api/placesApiClient";
import {MapService} from "./map.service";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation!:[number,number];
  public isLoadingPlaces:boolean = false;
  public places:Feature[]= [];

  get isUserLocationReady():boolean {
    return !!this.useLocation;
  }

  constructor( private placesApi: PlacesApiClient, private mapService:MapService) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {

    return new Promise( (resolve, reject ) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );
    });

  }

  getPlacesByQuyery(query:string = '') {
    // evaludar cuando el query es nulo
    if (query.length === 0) {
      this.places = [];
      this.isLoadingPlaces = false;
      return;
    }


    if (!this.useLocation) throw Error('no ahi')

    this.isLoadingPlaces= true;

    this.placesApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: this.useLocation.join(',')
      }
    })
      .subscribe(resp => {
          console.log(resp.features)
        this.isLoadingPlaces= false;
        this.places =resp.features;
        this.mapService.createMarkersFromPlaces(this.places, this.useLocation!);
      });
  }

  deletePlaces() {
    this.places = [];
  }

}
