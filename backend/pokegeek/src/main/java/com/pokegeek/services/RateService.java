package com.pokegeek.services;

import com.pokegeek.entities.PokemonRatings;
import com.pokegeek.entities.PokemonRatingsSummary;

public interface RateService {

    PokemonRatingsSummary saveRating(PokemonRatings pokemonRating);

    PokemonRatingsSummary getRating(String pokemonName);

}
