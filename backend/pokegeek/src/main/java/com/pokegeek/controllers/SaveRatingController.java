package com.pokegeek.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pokegeek.entities.PokemonRatings;
import com.pokegeek.entities.PokemonRatingsSummary;
import com.pokegeek.services.RateService;

@RestController
@RequestMapping("/api")
public class SaveRatingController {

    private RateService rateService;

    public SaveRatingController(RateService rateService) {
        this.rateService = rateService;
    }

    @PostMapping("/save")
    public PokemonRatingsSummary saveRating(@RequestBody PokemonRatings pokemonRating) {

        PokemonRatingsSummary pokemonRatingSummary = rateService.saveRating(pokemonRating);

        return pokemonRatingSummary;
    }

    @GetMapping("/get")
    public PokemonRatingsSummary getRating(String pokemonName) {

        PokemonRatingsSummary pokemonRatingSummary = rateService.getRating("Pikachu");

        return pokemonRatingSummary;
    }

}
