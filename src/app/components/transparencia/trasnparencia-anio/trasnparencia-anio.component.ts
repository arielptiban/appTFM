import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trasnparencia-anio',
  standalone: true,
  imports: [
  ],
  templateUrl: './trasnparencia-anio.component.html',
  styleUrl: './trasnparencia-anio.component.css'
})
export class TrasnparenciaAnioComponent {
  constructor(
    private route: ActivatedRoute
  ) { }

  public titulo: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.titulo = params['titulo']; })

  }
}
