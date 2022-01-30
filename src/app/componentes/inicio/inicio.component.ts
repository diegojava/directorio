import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista: any = []

  constructor(
    private negService: NegocioService
  ) { }

  ngOnInit(): void {
    this.getNegocios()
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

}
