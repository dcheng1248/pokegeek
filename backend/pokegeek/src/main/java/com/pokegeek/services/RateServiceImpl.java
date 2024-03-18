package com.pokegeek.services;

import org.springframework.stereotype.Service;

import com.pokegeek.dao.PokemonRatingRepository;
import com.pokegeek.dao.PokemonRatingSummaryRepository;
import com.pokegeek.entities.PokemonRatings;
import com.pokegeek.entities.PokemonRatingsSummary;

import jakarta.transaction.Transactional;

@Service
public class RateServiceImpl implements RateService{

    private PokemonRatingRepository pokemonRatingRepository;
    private PokemonRatingSummaryRepository pokemonRatingSummaryRepository;

    public RateServiceImpl(PokemonRatingRepository pokemonRatingRepository, PokemonRatingSummaryRepository pokemonRatingSummaryRepository) {
        this.pokemonRatingRepository = pokemonRatingRepository;
        this.pokemonRatingSummaryRepository = pokemonRatingSummaryRepository;
    }

    @Transactional
    public PokemonRatingsSummary saveRating(PokemonRatings pokemonRating) {

        this.pokemonRatingRepository.save(pokemonRating);
        return this.pokemonRatingSummaryRepository.findById(pokemonRating.getPokemonName()).orElse(null);
        
    }

    public PokemonRatingsSummary getRating(String pokemonName) {

        return this.pokemonRatingSummaryRepository.findById(pokemonName).orElse(null);
    }

}
