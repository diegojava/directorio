import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  lista: any = []
  id: any

   // Configuración de Google Maps 
   center = {lat: 18.3356806, lng: -99.5110333};
   zoom = 20;
   display?: google.maps.LatLngLiteral;

  constructor(
    private negService: NegocioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getNegocio()
  }

  getNegocio() {
    
    console.log(this.id);
    
    this.negService.getNegocio(this.id).subscribe(
      res => {
        this.lista = res
        console.log(this.lista);
      },
      error => console.log(error)
    )
  }

}
