import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
  			  private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe( params =>{
  		this.termino = params['termino'];
  		this.heroes = this._heroesService.buscarHeroes(params['termino']);
  		console.log(this.heroes);
  	})
  }

  verHeroe(idx:number){
    //console.log(idx);
  	this.router.navigate( ['/heroe',idx] );
  }

}
