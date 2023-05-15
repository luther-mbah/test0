import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { superHero } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

 mot='';
 errorText = '';
 superheroes !: superHero[] =[];
  constructor(private superheroService: SuperheroService){}



  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.mot.length < 3){
      this.errorText = "La recherche doit comporter plus de 2 lettres"

    } else{
      this.errorText = this.mot;
      this.superheroService.loadSuperHeroes(this.mot).subscribe(resultat =>
       this.superheroes = resultat['results'].map( (result: { favorite: boolean; }) => {
          result.favorite = false;
          return result;
        })
         
        );
    }
  }


}
