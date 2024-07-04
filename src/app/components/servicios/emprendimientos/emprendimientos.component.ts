import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emprendimientos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './emprendimientos.component.html',
  styleUrl: './emprendimientos.component.css'
})
export class EmprendimientosComponent {


  cards = [
    {
      titulo: 'Adquisición de equipos de computo',
      texto: 'El alcalde de la ciudad gestiona computadoras para apoyar la educación en el cantón.',
      fecha: '28 de junio de 2024',
      img: '../../../../assets/img/boletin1(1).webp',
    },
    {
      titulo: 'Visita inclusiva del Centro Diurno',
      texto: 'El Centro Diurno de la ciudad, junto a sus técnicos, realizaron una visita a la FAE en Ambato',
      fecha: '21 de junio de 2024',
      img: '../../../../assets/img/boletin2(1).webp',
    },
    {
      titulo: 'Acciones conjuntas en Mocha',
      texto: 'Se ha llevado a cabo trabajos complementarios en la pintura de la cancha Escuela Costa Rica, en la parroquia Pinguilí.',
      fecha: '20 de junio de 2024',
      img: '../../../../assets/img/boleytin3.webp',
    },
    {
      titulo: 'Trabajos de limpieza culminan',
      texto: 'Los trabajos de limpieza debido a las fuertes lluvias culminaron este miércoles.',
      fecha: '19 de junio de 2024',
      img: '../../../../assets/img/boletin4.webp',
    },
    {
      titulo: 'Emergencias en la provincia',
      texto: 'El COE Provincial de Tungurahua se reunió en Baños para abordar emergencias en la provincia.',
      fecha: '19 de junio de 2024',
      img: '../../../../assets/img/boletin5.webp',
    },
    {
      titulo: 'Rebacheo de vías',
      texto: 'El GAD Municipal, en coordinación con el Gobierno Provincial de Tungurahua, está trabajando en el rebacheo de vías en varios sectores del cantón Mocha.',
      fecha: '18 de junio de 2024',
      img: '../../../../assets/img/boletin6.webp',
    },
    {
      titulo: 'Talleres para erradicar la violencia',
      texto: 'Diversas instituciones se unieron en Mocha para llevar a cabo un taller sobre cómo actuar en situaciones de violencia.',
      fecha: '14 de junio de 2024',
      img: '../../../../assets/img/boletin7.webp',

    },
    {
      titulo: 'Proyecto "Creando Sueños"',
      texto: 'Proyecto que abre oportunidades para los emprendedores con discapacidad en Mocha.',
      fecha: '13 de junio de 2024',
      img: '../../../../assets/img/boletin8.webp',
    },
    {
      titulo: 'Impulso de la producción orgánica en el cantón',
      texto: 'Paul King, experto en Nanotecnología, propuso un plan piloto para transformar la producción agrícola en Mocha.',
      fecha: '12 de junio de 2024',
      img: '../../../../assets/img/boletin9.webp',
    },
  ]

  currentPage = 1;
  itemsPerPage = 6;
  totalPages: number;

  constructor() {
    this.totalPages = Math.ceil(this.cards.length / this.itemsPerPage);
  }

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.cards.slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }
}
