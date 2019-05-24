import { Component, OnInit } from '@angular/core';

import { InfoServiceService } from '../../info-service.service';

@Component({
  selector: 'app-astronautas',
  templateUrl: './astronautas.component.html',
  styleUrls: ['./astronautas.component.css']
})
export class AstronautasComponent implements OnInit {

   astronautas: Object;

  constructor(private info: InfoServiceService) { };

  ngOnInit() {
    this.info.getAstonautas().subscribe(
      data => this.astronautas = data 
    );
  }

}
