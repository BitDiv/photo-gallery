import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RemoteServiceService } from '../remote-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RestfulService } from '../shared/api/restful.service';
import { Configuracion } from '../shared/api/configuracion'
@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [
    RemoteServiceService,
    Configuracion,
    RestfulService
  ]
})
export class Tab1PageModule {}
