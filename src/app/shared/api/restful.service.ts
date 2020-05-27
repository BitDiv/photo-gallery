import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Configuracion } from './configuracion';
import { Observable } from 'rxjs';
import { Constante } from '../modelo/constante';
import { Respuesta } from '../modelo/respuesta';
import { Usuario } from '../modelo/usuario';
import { LoginPtp } from '../modelo/loginptp';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestfulService {
  private actionUrl: string;
  private headers: Headers;
  constructor(private http: HttpClient, private configuration: Configuracion) {
    this.actionUrl = ''
   //  + configuration.Server
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


  public PostLoginPtp = (cusuario: string, cclave: string, ctoken_celular: string): Observable<LoginPtp> => {
    const body = new HttpParams()
    .set('cusuario', cusuario.toString())
    .set('cclave', cclave.toString())
    .set('ctoken_celular', ctoken_celular.toString());

    return this.http.post<LoginPtp>('https://billetera.paytoperu.com/login', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'Access-Control-Allow-Origin','*')
    });
  }

  public PostLoginPhp = (cusuario: string, cclave: string, ctoken_celular: string): Observable<Usuario> => {
    const body = new HttpParams()
    .set('cusu_cod', cusuario.toString())
    .set('cclave', cclave.toString());

    return this.http.post<Usuario>('https://pay-me.website/dautos/api/login', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        //.set( 'Access-Control-Allow-Origin','*')
    });
  }

}
