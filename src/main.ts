import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2kxNDUiLCJhIjoiY2x1dHBzanpqMDFzejJvcGJzZzJsajhtaSJ9.3WRBTkpadp99uX35h4Uq7w'

if(!navigator.geolocation) {
  alert ('El navegador no soporta la geolocalizacion');
  throw new Error('El navegador no soporta la geolocalizacion');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
