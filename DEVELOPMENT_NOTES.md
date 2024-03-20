# Development log
This section contains details about release schecule, requirements, design,  troubleshooting processes and useful sources. 

## Release Log

See requirements section for details of each version.

20.03.2024\
Deployed v1.1.0

18.03.2024\
Deployed v1.0.2

17.03.2024\
Deployed v1.0.1

17.03.2024\
Deployed v1.0.1

## Requirements

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
    - Rating summary data should be displayed as number of stars (out of 10) with total number of ratings in the pokemon-details component. 
    - A form allowing users to rate the pokemon should be added to the pokemon-details component.

#### Non-Functional
1. The frontend should be deployed via github pages. The backend and database should be deployed to a cloud server. 

## Design

### Frontend

`/app/model/`: contains typescript interfaces to enforce data types

`/app/service/`: contains http services for API communication

`/app/component/`: contains angular components for the frontend

`/assets/images/`: contains images used in the App

`/environments`: contains environmental variables such as API URLs

### Backend

`/src/main/java/com.pokegeek.entities`: defines entities connecting with database

`/src/main/java/com.pokegeek.dao`: defines JPA interfaces for database transactions

`/src/main/java/com.pokegeek.services`: defines service functions for database transactions

`/src/main/java/com.pokegeek.controllers`: defines API endpoint exposure

`/src/main/java/com.pokegeek.config`: defines API endpoing configurations

`/src/main/resources/applicatoin.properties`: contains Spring and database settings

`pokegeek-backend.service`: contains service file used by systemctl to run backend

### Database

#### Table 1

|Pokemon Ratings|
|--------------- |
|ID (PK): int    |
|Pokemon Name: varchar|
|Rating: number          |
|Create Date: date     |

#### Table 2
|Pokemon Ratings Summary|
|----|
|Pokemon Name (PK): varchar|
|Average Rating: decimal|
|Total Ratings: number|

### Troubleshooting
1. Importing angular browser animations: an error occurs if it is imported into components. It needs to be imported in app.config.ts as provideBrowserAnimation().

2. MySQL-server installation on cloud VM failed. Increasing RAM from 512 MB to 1 GB solved the problem.

3. scp to VM failed. Correct syntax: scp to VM: scp [local file] root@[IP address]:/root

4. systemctl start service in VM failed. Absolute path to .JAR file required. 

5. Connection from https-based frontend to http-based backend API failed. SSL certificate required for back end or http (with custom domain) required for front end. 

6. Custom domain check in Github for frontend failed. DNS A and CNAME record updates required for custom domain. 

7. 404 Not Found Error for .js and .css files from custom domain frontend. Frontend had to be re-deployed with `--base-href=/` instead of `--base-href=/pokegeek/`. 


### Useful Sources
Angular star rating library: https://www.npmjs.com/package/ngx-stars

Deploying Angular to github pages: https://www.npmjs.com/package/angular-cli-ghpages

Setting up custom domain for github pages: https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a

Deploying spring on droplet: https://gsswain.medium.com/springboot-digitalocean-droplets-410b8bbc6fe6