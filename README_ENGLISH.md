# Pokegeek

Inspired by BoardGameGeek (https://boardgamegeek.com), this project aims to provide a platform for Pokemon lovers to view and rate various Pokemons.

For detailed development log and designs, see [DEVELOPMENT_NOTES.MD](./DEVELOPMENT_NOTES.md).
For German, see [README.MD](./README.md).

## Features
This web app consists of a Typescript/Angular frontend, a Java/Spring backend and a mySQL database.

1. The frontend can be viewed at http://pokegeek.online. It is deployed via github pages. 
    - The index page shows all regular pokemons (from PokeAPI). It allows filtering by pokemon type, has an autocomplete search bar and is paginated.
    - Clicking on each pokemon card redirects to the pokemon details page, which shows details about the pokemon (from PokeAPI). It also shows average user rating, total number of ratings and allows the user to rate the pokemon (from Java backend). 
    - The header component allows the user to go back to the pokemon index page. 

2. The backend can be accessed via http://157.230.114.115:8080/api. It is deployed on a cloud-based virtual machine. 
    - It exposes a GET endpoint for each pokemon (endpoint: /get/{pokemon_name}) that returns a json of the pokemon average rating and number of ratings. 
    - It exposes a POST endpoint that saves user ratings to the database (endpoint: /save). 

3. The database is not publicly accessible. It is deployed on a cloud-based virtual machine. 
    - It has a table that stores each user rating(rating id, pokemon name, rating and date). 
    - It has a table that stores aggregate information (average rating and total number of ratings) for each pokemon, which automatically updates upon insertion to the first table. 

## Known Issues
1. This app does not support https, it must be viewed via http (due to lack of SSL certificate at the backend address). If your browser is configured to use https, incognito mode may help to retain http.
2. This app does not support mobile viewing. 
3. The app is only manually tested. Unit tests are not yet available. 
4. Integration and deployment are manual. 

## Instructions to build/launch from source
1. Ensure you have the requirements installed: [Angular](https://angular.io/guide/setup-local), [Java 17](https://docs.oracle.com/en/java/javase/17/install/#Java-Platform%2C-Standard-Edition) and [MySQL Server](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/). If you don't, follow the links to install them. 

2. Clone this repo: `git clone git@github.com:dcheng1248/pokegeek.git`

3. First set up the database. Log into the MySQL CLI or use the GUI to run the `database/create_db.sql` file. Note that this file has a line that inserts a rating of 8 for Pikachu initially. If you do not want that, remove it from the file before running. 

4. In the backend folder, run `./mvnw clean package` to build the backend. It can then be run by `/usr/bin/java -jar target/pokegeek-0.0.1-SNAPSHOT.jar`. Alternatively, use `./mvnw spring-boot:run` to directly run the backend.

5. In the frontend folder, change the backend URL if needed (in src/environments/environment.development.ts and environment.ts). If the backend is launched locally, the URL is usually `http://localhost:8080`. Launch the frontend with `ng serve`. 

