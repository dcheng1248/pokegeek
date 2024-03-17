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

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).