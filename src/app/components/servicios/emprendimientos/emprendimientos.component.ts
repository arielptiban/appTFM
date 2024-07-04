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
      titulo: 'Ferrocomercio Palacios',
      texto: 'Más que una ferretería es el resultado de un sueño.',
      info: '28 de junio de 2024',
      img: '../../../../assets/img/emprendimiento1.webp',
    },
    {
      titulo: 'MoyanCalza',
      texto: 'Calidad y comodidad para sus pies, con precios accesibles a partir de 10 dólares.',
      info: '21 de junio de 2024',
      img: '../../../../assets/img/emprendimiento2.webp',
    },
    {
      titulo: 'Tupac Tambu',
      texto: 'Paradero gastronómico y turístico.',
      info: '20 de junio de 2024',
      img: '../../../../assets/img/emprendimiento3.webp',
    },
    {
      titulo: 'Agrovil',
      texto: 'La empresa que revoluciona la crianza de cuyes en Tungurahua.',
      info: '19 de junio de 2024',
      img: '../../../../assets/img/emprendimiento4.webp',
    },
    {
      titulo: 'Valparaiso',
      texto: 'El dulce sabor de la miel.',
      info: '19 de junio de 2024',
      img: '../../../../assets/img/emprendimiento5.webp',
    },
    {
      titulo: 'Calzado Edumaster',
      texto: 'Materiales de calidad, buenos cueros y ofrece precios accesibles, directos del productor al consumidor.',
      info: '18 de junio de 2024',
      img: '../../../../assets/img/emprendimiento6.webp',
    },
    {
      titulo: 'Cevichochos de Doña Anita',
      texto: 'Saludable, delicioso y nutritivo.',
      info: '14 de junio de 2024',
      img: '../../../../assets/img/emprendimiento7.webp',

    },
  ]

  currentPage = 1;
  itemsPerPage = 4;
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
