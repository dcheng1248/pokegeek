import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../model/pokemon';
import { PokemonDetail } from '../../model/pokemon-detail';
import { TypeColor } from '../../model/type-color';
import { TypeBackgroundColor } from '../../model/type-background-color';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule, MatAutocompleteModule, MatIconModule, CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, HeaderComponent],
  templateUrl: './pokemon-index.component.html',
  styleUrl: './pokemon-index.component.scss'
})
export class PokemonIndexComponent implements OnInit{

  pokemons: Pokemon[] = [];
  displayedPokemons: Pokemon[] = [];
  suggestedPokemons: Pokemon[] = [];
  currentPage: number = 1;
  types: string[] = ['bug','dark','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water'];
  selectedType: string = "";
  searchTerm: string = "";
  searchControl = new FormControl();

  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit():void {
    this.searchControl.valueChanges.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.suggestByName()
    });
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
        return [];
      });
    }
    else {
      this.displayedPokemons = this.pokemons;
    }
    this.currentPage = 1;
  }

  // generate suggestion list of pokemons
  suggestByName() {
    if (this.searchTerm) {
      this.suggestedPokemons = this.pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    else {
      this.suggestedPokemons = [];
    }
  }

  filterByName() {
    if (this.searchTerm) {
      this.displayedPokemons = this.pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
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
  showPokemonDetail(pokemon: Pokemon) {
    this.router.navigate([`/pokemon-detail/${pokemon.name}`]);
  }

}