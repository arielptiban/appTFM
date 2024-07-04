import { IMAGE_CONFIG } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-municipalidad-mocha',
  standalone: true,
  imports: [],
  templateUrl: './municipalidad-mocha.component.html',
  styleUrl: './municipalidad-mocha.component.css',

  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    },
  ],
})
export class MunicipalidadMochaComponent {

}
