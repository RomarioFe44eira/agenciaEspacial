import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { InfoServiceService } from '../../../info-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  astronautas: Object;

  constructor(private service: InfoServiceService, private route: ActivatedRoute) {
    console.log(this.route);
    this.id = this.route.snapshot.params['id'];
  };

  ngOnInit() {
     this.service.getAstonauta(this.id).subscribe(
      data => this.astronautas = data 
    );
  };
  



}
