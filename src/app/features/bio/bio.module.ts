import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './bio.component';
import { BioService } from './services/bio.service';
import { BioStudyComponent } from './components/bio-study/bio-study.component';
import { BioBioComponent } from './components/bio-bio/bio-bio.component'; 


@NgModule({ declarations: [
        BioComponent,
        BioStudyComponent,
        BioBioComponent
    ],
    exports: [
        BioComponent // Asegúrate de exportar BioComponent si quieres usarlo en otros módulos
    ], imports: [CommonModule,
        BioRoutingModule], providers: [
        BioService // Asegúrate de proporcionar el servicio si es necesario
        ,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class BioModule { }
