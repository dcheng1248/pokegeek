package com.pokegeek.entities;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="pokemon_ratings_summary")
public class PokemonRatingsSummary {
    @Id
    @Column(name="pokemon_name")
    private String pokemonName;
    @Column(name="average_rating")
    private BigDecimal averageRatings;
    @Column(name="total_ratings")
    private int totalRatings;

    public PokemonRatingsSummary(){}
}
