import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [
    GoogleMapsModule,
    CommonModule,
    RouterLink,
    RouterOutlet

  ],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  locations = [
    { lat: -1.418698, lng: -78.661002, desc: 'Buses  San Juan' },
  ];

  apiKey = 'AIzaSyBJxO93M2SVWKfS5y11g3CJmgLCXb1MPT8';
  mapLoaded = false;
  center: google.maps.LatLngLiteral = { lat: -1.418698, lng: -78.661002 };
  zoom = 16.5;

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
