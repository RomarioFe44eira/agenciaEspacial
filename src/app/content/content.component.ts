import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  linkImagens: string[] = [
    'https://placeimg.com/250/250/tech',
    'https://placeimg.com/250/250/people',
    'https://placeimg.com/250/250/animals/sepia',
    'https://placeimg.com/250/250/nature',
    'https://placeimg.com/250/250/arch',
    'https://placeimg.com/250/250/tech',
    'https://placeimg.com/250/250/animals',
    'https://placeimg.com/250/250/nature',
  ];

  constructor() { }

  ngOnInit() {
  }

}
