import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonService } from '../service/pokemon.service';
import { PokemonBasic } from '../model/pokemon-basic';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  pokemons: PokemonBasic[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit():void {
    this.getPokemons();
  }
  
  getPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(pokemons => {
      pokemons.forEach(pokemon => {
        let parsedId = pokemon.url.split("/")[pokemon.url.split('/').length - 2]
        pokemon.id = parseInt(parsedId);
      });
      this.pokemons = pokemons;
      console.log(this.pokemons);
    })
  }
}

