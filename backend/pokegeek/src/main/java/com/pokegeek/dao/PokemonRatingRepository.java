package com.pokegeek.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pokegeek.entities.PokemonRatings;

public interface PokemonRatingRepository extends JpaRepository<PokemonRatings, Long>{

}
