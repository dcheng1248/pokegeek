import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../model/pokemon';
import { environment } from '../../../environments/environment';
import { PokemonDetail } from '../../model/pokemon-detail';
import { MatCardModule } from '@angular/material/card';
import { TypeBackgroundColor } from '../../model/type-background-color';
import { TypeColor } from '../../model/type-color';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params => this.pokemon = {name: params['pokemonName'], url: `${environment.pokemonURL}/${params['pokemonName']}`});
    if (this.pokemon) {
      this.getPokemonDetails(this.pokemon);
    }
    console.log(this.pokemon);

  }

  getPokemonDetails(pokemon: Pokemon): void {
    this.pokemonService.getPokemonDetail(pokemon).subscribe((pokemonDetails: PokemonDetail) =>
      pokemon.details = pokemonDetails
    )
  }

  getTypeColor(type: string): string {
    return (TypeColor as Record<string, string>)[type];
  }

  getTypeBackgroundColor(type: string): string {
    return (TypeBackgroundColor as Record<string, string>)[type];
  }
}
