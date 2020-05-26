import { Injectable } from '@angular/core';

@Injectable()
export class Configuracion {
    public Server = 'http://localhost:8080/bricherobe/frontend/';
    public ApiUrl = 'restful/';
    public ServerWithApiUrl;
}
