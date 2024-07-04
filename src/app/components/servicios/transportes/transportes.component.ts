import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, GoogleMap } from "@angular/google-maps";

@Component({
  selector: 'app-transportes',
  standalone: true,
  imports: [
    GoogleMapsModule,
    CommonModule,
  ],
  templateUrl: './transportes.component.html',
  styleUrl: './transportes.component.css'
})
export class TransportesComponent {
  telefonos = [
    {
      coop: 'Buses San Juan',
      telefono: '2779208',
      direccion: 'Calle El Rey',
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    },
    {
      coop: 'Cooperativa 24 de junio',
      telefono: '2779061',
      direccion: 'Calle Juan Armendáriz ',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'

    },
    {
      coop: 'Buses Interprovinciales',
      telefono: '2580177',
      direccion: 'AV. Panamericana',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      coop: 'Buses intercantonales',
      telefono: '2779057',
      direccion: 'Calle Sucre',
      icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
    },
  ]

  get telefonosDep() {
    return this.telefonos
  }
  apiKey = 'AIzaSyBJxO93M2SVWKfS5y11g3CJmgLCXb1MPT8';
  mapLoaded = false;
  center: google.maps.LatLngLiteral = { lat: -1.4211, lng: -78.65837860107422 };
  zoom = 16;

  locations = [
    { lat: -1.419186, lng: -78.661120, desc: 'Buses  San Juan', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' },
    { lat: -1.419253, lng: -78.661600, desc: 'Cooperativa  24 de Junio', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' },
    { lat: -1.423663, lng: -78.655569, desc: 'Buses  Interprovinciales', icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { lat: -1.421272, lng: -78.654135, desc: 'Buses  Intercantonales', icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png' },
  ];

  ngOnInit(): void {
    this.loadGoogleMapsApi().then(() => {
      this.mapLoaded = true;
    }).catch(error => {
      console.error('Error loading Google Maps API:', error);
    });
  }

  loadGoogleMapsApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).google && (window as any).google.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.head.appendChild(script);
    });
  }

}
