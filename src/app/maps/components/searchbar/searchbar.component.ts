import { Component } from '@angular/core';
import {PlacesService} from "../../services/places.service";

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  private debounceTimer?:NodeJS.Timeout

  constructor(private placeService: PlacesService) {

  }


  onQueryChanged(query:string='') {

    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(()=> {

      this.placeService.getPlacesByQuyery(query);
    },500)
  }
}
