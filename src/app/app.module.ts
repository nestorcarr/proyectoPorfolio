import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { IndexComponent } from './index/index.component';
import { LaboralComponent } from './laboral/laboral.component';
import { LogiinComponent } from './logiin/logiin.component';
import { LogoutComponent } from './logout/logout.component';
import { ModalNavbarComponent } from './modals/modal-navbar/modal-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbardashComponent } from './navbardash/navbardash.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RedesComponent } from './redes/redes.component';
import { IconoEdicionComponent } from './icono-edicion/icono-edicion.component';
import { EdicionComponent } from './edicion/edicion.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { RedesdashComponent } from './redesdash/redesdash.component';
import { CarouseldashComponent } from './carouseldash/carouseldash.component';
import { AcercademidashComponent } from './acercademidash/acercademidash.component';
import { EdicionmasComponent } from './edicionmas/edicionmas.component';
import { LaboraldashComponent } from './laboraldash/laboraldash.component';
import { EducaciondashComponent } from './educaciondash/educaciondash.component';
import { HabilidaddashComponent } from './habilidaddash/habilidaddash.component';
import { ProyectodashComponent } from './proyectodash/proyectodash.component';
import { ModalagregarComponent } from './modals/modalagregar/modalagregar.component';
import { ModalborrarComponent } from './modals/modalborrar/modalborrar.component';
import { ModalcambiarComponent } from './modals/modalcambiar/modalcambiar.component';
import { ModaleditarComponent } from './modals/modaleditar/modaleditar.component';
import { ModaleditardashComponent } from './modals/modaleditardash/modaleditardash.component';
import { ModaldashedicionpersComponent } from './modals/modaldashedicionpers/modaldashedicionpers.component';
import { ModaldashborrrarpersComponent } from './modals/modaldashborrrarpers/modaldashborrrarpers.component';
import { ModaldashedicionlabComponent } from './modals/modaldashedicionlab/modaldashedicionlab.component';
import { ModaldashborrarlabComponent } from './modals/modaldashborrarlab/modaldashborrarlab.component';
import { ModaldashedicioneducComponent } from './modals/modaldashedicioneduc/modaldashedicioneduc.component';
import { ModaldashborrareducComponent } from './modals/modaldashborrareduc/modaldashborrareduc.component';
import { ModaldashedicionhabComponent } from './modals/modaldashedicionhab/modaldashedicionhab.component';
import { ModaldashborrarhabComponent } from './modals/modaldashborrarhab/modaldashborrarhab.component';
import { ModaldashedicionproyComponent } from './modals/modaldashedicionproy/modaldashedicionproy.component';
import { ModaldashborrarproyComponent } from './modals/modaldashborrarproy/modaldashborrarproy.component';
import { EdicionmaslabComponent } from './edicionmaslab/edicionmaslab.component';
import { EdicionmaseducComponent } from './edicionmaseduc/edicionmaseduc.component';
import { EdicionmashabComponent } from './edicionmashab/edicionmashab.component';
import { EdicionmasproyComponent } from './edicionmasproy/edicionmasproy.component';
import { ModalnavbardashComponent } from './modals/modalnavbardash/modalnavbardash.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BarralateralComponent,
    CarouselComponent,
    DashboardComponent,
    EducacionComponent,
    ErrorComponent,
    FooterComponent,
    HabilidadComponent,
    IndexComponent,
    LaboralComponent,
    LogiinComponent,
    LogoutComponent,
    ModalNavbarComponent,
    NavbarComponent,
    NavbardashComponent,
    ProyectoComponent,
    RedesComponent,
    IconoEdicionComponent,
    EdicionComponent,
    AcercademiComponent,
    RedesdashComponent,
    CarouseldashComponent,
    AcercademidashComponent,
    EdicionmasComponent,
    LaboraldashComponent,
    EducaciondashComponent,
    HabilidaddashComponent,
    ProyectodashComponent,
    ModalagregarComponent,
    ModalborrarComponent,
    ModalcambiarComponent,
    ModaleditarComponent,
    ModaleditardashComponent,
    ModaldashedicionpersComponent,
    ModaldashborrrarpersComponent,
    ModaldashedicionlabComponent,
    ModaldashborrarlabComponent,
    ModaldashedicioneducComponent,
    ModaldashborrareducComponent,
    ModaldashedicionhabComponent,
    ModaldashborrarhabComponent,
    ModaldashedicionproyComponent,
    ModaldashborrarproyComponent,
    EdicionmaslabComponent,
    EdicionmaseducComponent,
    EdicionmashabComponent,
    EdicionmasproyComponent,
    ModalnavbardashComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
