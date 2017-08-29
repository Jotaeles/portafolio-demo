import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{

  constructor( public _info:InformacionService) { }

  anio:number = new Date().getFullYear();

}
