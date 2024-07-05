import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MochaComponent } from './components/municipalidad/mocha/mocha.component';
import { MunicipalidadMochaComponent } from './components/municipalidad/municipalidad-mocha/municipalidad-mocha.component';
import { LeydetransparenciaComponent } from './components/transparencia/leydetransparencia/leydetransparencia.component';
import { TrasnparenciaAnioComponent } from './components/transparencia/trasnparencia-anio/trasnparencia-anio.component';
import { UltimasNoticiasComponent } from './components/comunicacion/ultimas-noticias/ultimas-noticias.component';
import { GaleriaImagenesComponent } from './components/comunicacion/galeria-imagenes/galeria-imagenes.component';
import { DirectorioTelefonicoComponent } from './components/contacto/directorio-telefonico/directorio-telefonico.component';
import { HorarioAtencionComponent } from './components/contacto/horario-atencion/horario-atencion.component';
import { QuejasYSugerenciasComponent } from './components/servicios/quejas-y-sugerencias/quejas-y-sugerencias.component';
import { EmprendimientosComponent } from './components/servicios/emprendimientos/emprendimientos.component';
import { TransportesComponent } from './components/servicios/transportes/transportes.component';
import { AlcaldeComponent } from './components/municipalidad/alcalde/alcalde.component';

export const routes: Routes = [
    { path: "Inicio", component: HomeComponent },
    // Municipalidad
    { path: "municipalidad-de-Mocha", component: MunicipalidadMochaComponent },
    { path: "mocha", component: MochaComponent },
    { path: "alcalde", component: AlcaldeComponent },
    // Transparencia
    { path: "ley-de-transparencia", component: LeydetransparenciaComponent },
    { path: "transparencia/:titulo", component: TrasnparenciaAnioComponent, data: { title: 'Transparencia' } },
    //Servicios
    { path: "quejas-y-sugerencias", component: QuejasYSugerenciasComponent },
    { path: "emprendimientos", component: EmprendimientosComponent },
    { path: "transportes", component: TransportesComponent },
    //Comunicacion
    { path: "ultimas-noticias", component: UltimasNoticiasComponent },
    { path: "galeria-imagenes", component: GaleriaImagenesComponent },
    //Contacto
    { path: "directorio-telefonico", component: DirectorioTelefonicoComponent },
    { path: "horario-de-atencion", component: HorarioAtencionComponent },


    { path: "", redirectTo: "/Inicio", pathMatch: "full" }
];
