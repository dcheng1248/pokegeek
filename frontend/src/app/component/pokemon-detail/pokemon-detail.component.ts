import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../model/pokemon';
import { environment } from '../../../environments/environment';
import { PokemonDetail } from '../../model/pokemon-detail';
import { MatCardModule } from '@angular/material/card';
import { TypeBackgroundColor } from '../../model/type-background-color';
import { TypeColor } from '../../model/type-color';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RatingService } from '../../service/rating.service';
import { PokemonRatingSummaryApiResponse } from '../../model/pokemon-rating-summary-api-response';
import { NgxStarsModule } from 'ngx-stars';
import { PokemonRatingDto } from '../../model/pokemon-rating-dto';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgxStarsModule, HeaderComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  pokemon?: Pokemon;
  userRating?: number;

  constructor(private pokemonService: PokemonService, private ratingService: RatingService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params => this.pokemon = {name: params['pokemonName'], url: `${environment.pokemonURL}/${params['pokemonName']}`});
    if (this.pokemon) {
      this.getRatingSummary(this.pokemon);
      this.getPokemonDetails(this.pokemon);
    }

  }

  getRatingSummary(pokemon: Pokemon): void {
    this.ratingService.getRatingSummary(pokemon).subscribe((pokemonRatingSummaryApiResponse: PokemonRatingSummaryApiResponse) => {
      if (pokemonRatingSummaryApiResponse) {
        pokemon.rating = pokemonRatingSummaryApiResponse.averageRatings;
        pokemon.rating_number = pokemonRatingSummaryApiResponse.totalRatings;
      }
      else {
        pokemon.rating = 0;
        pokemon.rating_number = 0;
      }
      console.log(pokemon.rating);
    })
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

  onRatingSet(userRating: number): void {
    if (this.pokemon && window.confirm(`Do you want to give a rating of ${userRating} to this pokemon?`)) {
      this.userRating = userRating;
      let pokmeonRating: PokemonRatingDto = {
        pokemonName: this.pokemon.name,
        rating: this.userRating
      };
      this.ratingService.saveRating(pokmeonRating).subscribe((pokemonRatingSummaryApiResponse: PokemonRatingSummaryApiResponse) => {
        if (this.pokemon) {
          this.pokemon.rating = pokemonRatingSummaryApiResponse.averageRatings;
          this.pokemon.rating_number = pokemonRatingSummaryApiResponse.totalRatings;
        }
      });
      alert(`Thank you for rating! This window will now be reloaded.`);
      window.location.reload();
    }
    else {
      alert(`The rating has been cancelled.`)
    }
  }

}
