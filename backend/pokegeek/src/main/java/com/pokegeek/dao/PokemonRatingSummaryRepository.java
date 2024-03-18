package com.pokegeek.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pokegeek.entities.PokemonRatingsSummary;

public interface PokemonRatingSummaryRepository extends JpaRepository<PokemonRatingsSummary, String>{

}
