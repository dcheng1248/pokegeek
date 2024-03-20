# Pokegeek

Inspired by BoardGameGeek (https://boardgamegeek.com/), this project aims to provide a platform for Pokemon lovers to view and rate various Pokemons. \

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development Log

See requirements section for details of each version

17.03.2024
1. Deployed v1.0.0
2. Deployed v1.0.1

Issues:
v1.0.1: Pokemon details component does not support mobile viewing

## Anforderungen / Requirements

### v1.0.0 (Minimum Viable Product)

#### Functional
1. An index homepage rendered by the "pokemon-index" component showing all usual pokemons (ID < 10000)
    - This should automatically update if there are new pokemons in the API
    - Pokemons should be shown on cards organized in a grid
    - Each pokemon card should have the name, image and types of the pokemon
    - Each pokemon card should be clickable and route to the pokemon details page
    - This should allow filtering pokemon by type
    - This should contain pagination for navigating the large number of pokemo
2. A pokemon details page for each pokemon rendered by the "pokemon-details" component
    - This should contain the name, image, height, weight, types, abilities and base stats of the pokemon
3. A header on each page rendered by the "pokemon-header" component
    - This should include the name of the web app (Pokegeek), a public domain pokeball icon and a link for navigating to the index homepage

#### Non Functional
1. This should be deployed locally to `http://localhost:4200/` by the `ng serve` command from the Angular CLI

### v1.0.1 (Deployment)

#### Non Functional
1. This should be deployed via github pages

### v1.0.2 (Search improvement)

#### Functional
1. The index homepage (pokemon-index component) allows users to search pokemon by name
    - A list of autocomplete suggestions should be made as the user types
    - When the user clicks on a suggestion, redirection to that pokemon occurs
    - If a user hits enter or press the search icon, the pokemons are filtered so only the ones containing the search string are listed

### v1.1.0 (Incorporate backend)

#### Functional
1. A mySQL database should be set up to record and report user ratings of pokemons
    - The database should have 1 pokemon_ratings table and a pokemon_ratings_summary table
    - New ratings should be recorded to the pokemon_ratings table
    - The pokmeon_ratings_summary table should report average rating and total number of ratings for each pokemon
    - New inserts into the pokemon_ratings table should trigger an automatic update in the pokemon_rating_summary table
2. A Java backend should be developed to connect the Angular frontend with the mySQL database
    - The backend should have a PokemonRatings entity and a PokemonRatingsSummary entity corresponding to the two database tables
    - The backend should expose a POST endpoint that adds rating data to the database
    - The backend should expose a GET endpoint that gets rating summary data from the database
3. The Angular frontend should be modified to allow user rating and display of rating summary data
    - Rating summary data should be displayed as number of stars (out of 10) with total number of ratings in both the pokemon-index and pokemon-details component. 
    - A form allowing users to rate the pokemon should be added to the pokemon-details component.

#### Non-Functional
1. The frontend should be deployed on github pages while the backend and database are deployed locally. The backend should be deployed to `http://localhost:8080/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).