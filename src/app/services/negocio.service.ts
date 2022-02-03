import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  url = 'http://localhost:3050/api/negocios'
  constructor(
    private http: HttpClient
  ) { }

  // get negocios
  getNegocios() {
    return this.http.get(this.url)
  }

  // get one negocio
  getNegocio(id: any) {
    return this.http.get(this.url + '/' + id)
  }

}
