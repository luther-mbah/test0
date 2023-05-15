import { Injectable } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';
import { HttpClient } from '@angular/common/http';
import { Superhero } from './superhero';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  accessToken ='6754401237922530';
  url ='https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/';
  
  superheroes : superHero[] = [
    { 
      id: 0,
      name: 'Captain america',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      imgSrc: 'assets/images/OIP.jpg',
      favorite: false
    },
    {
      id: 1,
      name: 'Spiderman',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content",
      imgSrc: 'assets/images/sp.jpg',
      favorite: true
    },
    {
      id: 2,
      name: 'Thor',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content",
      imgSrc: 'assets/images/thor.jpg',
      favorite: false
    },
    {
      id: 3,
      name: 'Super Man',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content",
      imgSrc: 'assets/images/sup.jpg',
      favorite: true
    }
  ];
  httpClient: any;

  constructor( private httpclient: HttpClient) {}

  loadSuperHeroes(name: string ) : Observable<superHero[]>{
    return  this.httpClient.get(<superHero[]><unknown>(this.url + this.accessToken + '/search/' + name));
  }

  getSuperheroes(): superHero[]{
    return this.superheroes;

  }
  setFavorite(id: number){
    this.superheroes[id].favorite = !this.superheroes[id].favorite;

  }
}
