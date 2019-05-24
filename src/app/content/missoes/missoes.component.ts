import { Component, OnInit } from '@angular/core';

import { InfoServiceService } from '../../info-service.service';

@Component({
  selector: 'app-missoes',
  templateUrl: './missoes.component.html',
  styleUrls: ['./missoes.component.css']
})
export class MissoesComponent implements OnInit {

  missoes: Object;

  constructor(private info: InfoServiceService) { };

  ngOnInit() {
    this.info.getMissoes().subscribe(
      data => this.missoes = data 
    );
  }
  
  

}
