# Pokegeek

Inspiriert von BoardGameGeek (https://boardgamegeek.com/) soll dieses Projekt Pokemon-Liebhabern eine Plattform bieten, auf der sie verschiedene Pokemon ansehen und bewerten können.
Inspired by BoardGameGeek (https://boardgamegeek.com/), this project aims to provide a platform for Pokemon lovers to view and rate various Pokemons. 

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) Version 17.2.0 erstellt.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Anforderungen / Requirements

### v1.0.0 (Minimum Viable Product)

#### Functional
1. An index homepage rendered by the "pokemon-index" component showing all usual pokemons (ID < 10000)
    - This should automatically update if there are new pokemons in the API
    - Pokemons should be shown on cards organized in a grid
    - Each pokemon card should have the name, image and types of the pokemon
    - Each pokemon card should be clickable and route to the pokemon details page
2. A pokemon details page for each pokemon rendered by the "pokemon-details" component
    - This should contain the name, image, height, weight, types, abilities and base stats of the pokemon
3. A header on each page rendered by the "pokemon-header" component
    - This should include a pokemon logo, the name of the web app (Pokegeek) and a link for navigating to the index homepage

#### Non Functional
1. This should be deployed locally to `http://localhost:4200/` by the `ng serve` command from the Angular CLI

### v1.0.1 (Quality of Life Improvements)

#### Functional
1. The "pokemon-index" component
    - This should allow filtering pokemon by type
    - This should contain pagination for navigating the large number of pokemons

#### Non Functional
1. This should be deployed via github pages

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
