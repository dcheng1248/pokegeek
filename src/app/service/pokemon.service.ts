import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonApiResponse } from '../model/pokemon-api-response';
import { Pokemon } from '../model/pokemon';
import { PokemonDetail } from '../model/pokemon-detail';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonURL: string;
  pokemonLimit: string;

  constructor(private http: HttpClient) {
      this.pokemonURL = environment.pokemonURL;
      this.pokemonLimit = environment.pokemonLimit;
  }

  getAllPokemons(): Observable<Pokemon[]> {
      return this.http.get<PokemonApiResponse>(`${this.pokemonURL}?limit=${this.pokemonLimit}`)
      .pipe(map(response => response.results))
      .pipe(catchError(this.handleError));
  }

  getPokemonDetail(pokemon: Pokemon): Observable<PokemonDetail> {
      return this.http.get<PokemonDetail>(`${this.pokemonURL}/${pokemon.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } 
      else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

