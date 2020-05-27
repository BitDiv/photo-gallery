import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuracion } from '../shared/api/configuracion';
import { RestfulService } from '../shared/api/restful.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    Configuracion,
    RestfulService
  ]
})
export class LoginModule { }
