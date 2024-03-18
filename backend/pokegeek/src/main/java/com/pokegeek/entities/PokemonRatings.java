package com.pokegeek.entities;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="pokemon_ratings")
public class PokemonRatings {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="rating_id")
    private Long id;
    @Column(name="pokemon_name")
    private String pokemonName;
    @Column(name="rating")
    private int rating;
    @Column(name="create_date")
    @CreationTimestamp
    private Date createDate;

    public PokemonRatings(){}
}
