import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directorio-telefonico',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './directorio-telefonico.component.html',
  styleUrl: './directorio-telefonico.component.css'
})
export class DirectorioTelefonicoComponent {

  telefonos = [
    {
      departamento: 'Biblioteca Yanahurco',
      telefono: '2580177'
    },
    {
      departamento: 'Planta de Balanceados',
      telefono: '2779008'
    },
    {
      departamento: 'Frente Sur Occidental',
      telefono: '2779057'
    },
    {
      departamento: 'Edificio Principal',
      telefono: '2779087'
    },
    {
      departamento: 'Edificio Principal',
      telefono: '2779207'
    },
    {
      departamento: 'Edificio Principal',
      telefono: '2779217'
    },
    {
      departamento: 'La Estación – Turismo',
      telefono: '2779475'
    }
  ]
  extensiones = [
    {
      unidad: 'Secretaría',
      extension: '101'
    },
    {
      unidad: 'FAX',
      extension: '102'
    },
    {
      unidad: 'Secretaría General',
      extension: '103'
    },
    {
      unidad: 'Alcaldía',
      extension: '104'
    },
    {
      unidad: 'Sistemas',
      extension: '105'
    },
    {
      unidad: 'Contabilidad',
      extension: '106'
    },
    {
      unidad: 'Obras Publicas',
      extension: '107'
    },
    {
      unidad: 'Servicio Internet',
      extension: '108'
    },
    {
      unidad: 'Registro de la Propiedad',
      extension: '109'
    },
    {
      unidad: 'Avalúos y Catastros',
      extension: '110'
    },
    {
      unidad: 'Comisaría Municipal',
      extension: '111'
    },
    {
      unidad: 'Auditoría Interna',
      extension: '112'
    },
    {
      unidad: 'Biblioteca',
      extension: '113'
    },
    {
      unidad: 'Recaudación',
      extension: '114'
    },
    {
      unidad: 'Guardianía',
      extension: '115'
    },
    {
      unidad: 'Proveduría',
      extension: '116'
    },
    {
      unidad: 'Jurídico',
      extension: '117'
    },
    {
      unidad: 'Dirección OO.PP.',
      extension: '118'
    }, {
      unidad: 'Tesorería',
      extension: '120'
    },
    {
      unidad: 'Bodega',
      extension: '121'
    },
    {
      unidad: 'Dirección Financiera',
      extension: '122'
    }
  ]
  get telefonosDep() {
    return this.telefonos
  }

  get ext() {
    return this.extensiones
  }
}
