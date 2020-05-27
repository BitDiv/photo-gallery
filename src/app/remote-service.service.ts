import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './shared/modelo/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RemoteServiceService {
  private actionUrl: string;
  private headers: Headers;
  constructor(private http: HttpClient) {
    this.actionUrl = ''
     
    + 'https://jsonplaceholder.typicode.com';
  }


  public getPosts=  (): Observable<any> => {
    const body = new HttpParams()
    return this.http.get<any>(this.actionUrl + '/posts');
  }

  /*public PostLogin = (usuario: string, clave: string): Observable<Usuario> => {
    const _usuario: Usuario = new Usuario();
    _usuario.cusu_cod = usuario;
    _usuario.cclave = clave;
    return this.http.post<Usuario>('http://localhost:3800/api/login', _usuario, httpOptions);
  }*/

}
