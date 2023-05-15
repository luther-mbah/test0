import { Component, Input, OnInit } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

 
  @Input() superheroes!: superHero[];
  constructor(){}
  ngOnInit(): void {
    
  }
  addToFavoriteMain(id: number){
    this.superheroes[id].favorite =!this.superheroes[id].favorite;
  }

}
