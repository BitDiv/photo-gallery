import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Configuracion } from './configuracion';
import { Observable } from 'rxjs';
import { Constante } from '../modelo/constante';
import { Respuesta } from '../modelo/respuesta';
import { Usuario } from '../modelo/usuario';


@Injectable({
  providedIn: 'root'
})
export class RestfulService {
  private actionUrl: string;
  private headers: Headers;
  constructor(private http: HttpClient, private configuration: Configuracion) {
    this.actionUrl = ''
     + configuration.Server
    + configuration.ApiUrl;
  }
  public PostLogin = (usuario: string, clave: string): Observable<Usuario> => {
    const _usuario: Usuario = new Usuario();
    _usuario.cusu_cod = usuario;
    _usuario.cclave = clave;
    return this.http.post<Usuario>(this.actionUrl + 'reservabe/validarLogin', _usuario, { withCredentials: false });
  }
  public VerificarLogin = (): Observable<Usuario> => {
      return this.http.post<Usuario>(this.actionUrl + 'reservabe/recuperarSession', '', { withCredentials: false });
  }
  public CerrarLogin = (): Observable<Respuesta> => {
    return this.http.post<Respuesta>(this.actionUrl + 'reservabe/cerrarSession', '', { withCredentials: false });
  }

}
