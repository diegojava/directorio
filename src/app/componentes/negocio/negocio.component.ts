import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from 'src/app/services/negocio.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  lista: any = []
  id: any

   // Configuración de Google Maps 
   googleUrl: any;
   saniUrl: any;

  constructor(
    private negService: NegocioService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getNegocio(this.id)

    setTimeout(() => {
      let lat = parseFloat(this.lista[0].latitud)
      let lng = parseFloat(this.lista[0].longitud)
      this.googleUrl = 'http://maps.google.com/maps?q=' + lat + ',' + lng + '&z=16&output=embed'
      console.log(this.googleUrl);
      this.saniUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleUrl)
    }, 100);
  }

  getNegocio(id: any) {
    this.negService.getNegocio(id).subscribe(
      res => {
        this.lista = res
        console.log(this.lista);
      },
      error => console.log(error)
    )
  }

}
