import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista: any = []
  destacado: any = []

  constructor(
    private negService: NegocioService
  ) { }

  ngOnInit(): void {
    this.getNegocios()
    this.getNegocioDestacado(2) // TODO: que se lea el id por parámetro
  }

  getNegocios() {
    this.negService.getNegocios().subscribe(
      res => {
        this.lista = res
        console.log(this.lista);
      },
      error => console.log(error)
    )
  }

  getNegocioDestacado(id: number) {
    this.negService.getNegocio(id).subscribe(
      res => {
        this.destacado = res
        console.log("destacado", this.destacado);
      },
      error => console.log(error) 
    )
  }

}
