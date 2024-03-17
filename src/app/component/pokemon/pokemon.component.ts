import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../model/pokemon';
import { PokemonDetail } from '../../model/pokemon-detail';
import { TypeColor } from '../../model/type-color';
import { TypeBackgroundColor } from '../../model/type-background-color';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{

  pokemons: Pokemon[] = [];
  displayedPokemons: Pokemon[] = [];
  currentPage: number = 1;
  types: string[] = ['bug','dark','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water'];
  selectedType: string = "";

  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit():void {
    this.getValidPokemons();
  }

  // when pagation changes
  pageChangeEvent(page: number): void {
    this.currentPage = page;
  }
  
  // get all pokemons (with name) with ID < 10000, assign ID and details
  getValidPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons: Pokemon[]) => {
      pokemons.forEach(pokemon => {
        let parsedId = pokemon.url.split("/")[pokemon.url.split('/').length - 2]
        pokemon.id = parseInt(parsedId);
        this.getPokemonDetails(pokemon)
      });
      this.pokemons = pokemons.filter(pokemon => typeof pokemon.id === 'number' && pokemon.id < 10000);
      this.displayedPokemons = this.pokemons;
    })
  }

  // get detailed info of each pokemon from API
  getPokemonDetails(pokemon: Pokemon): void {
    this.pokemonService.getPokemonDetail(pokemon).subscribe((pokemonDetails: PokemonDetail) =>
      pokemon.details = pokemonDetails
    )
  }

  // get type background colour
  getTypeColor(type: string): string {
    return (TypeColor as Record<string, string>)[type];
  }

  // get card background colour by type
  getTypeBackgroundColor(type: string): string {
    return (TypeBackgroundColor as Record<string, string>)[type];
  }

  // filter displayed pokemons by type
  filterByType() {
    if (this.selectedType) {
      this.displayedPokemons = this.pokemons.filter(pokemon => {
        if (pokemon.details && pokemon.details.types) {
          return pokemon.details.types.some(type => type.type.name === this.selectedType);
        }
        return undefined;
      });
    }
    else {
      this.displayedPokemons = this.pokemons;
    }
    this.currentPage = 1;
  }

  getPokemonNameById(pokemonId: number): string {
    return this.pokemons[pokemonId-1].name;
  }

  // show pokemon details when card is clicked
  showPokemonDetail(pokemonId: number) {
    let pokemonName: string = this.getPokemonNameById(pokemonId);
    this.router.navigate([`/pokemon-detail/${pokemonName}`]);
  }

}