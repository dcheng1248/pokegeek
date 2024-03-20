import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonRatingSummaryApiResponse } from '../model/pokemon-rating-summary-api-response';
import { Pokemon } from '../model/pokemon';
import { PokemonRatingDto } from '../model/pokemon-rating-dto';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  backendURL: string;

  constructor(private http: HttpClient) {
    this.backendURL = environment.backendURL;
  }

  getRatingSummary(pokemon: Pokemon): Observable<PokemonRatingSummaryApiResponse> {
    return this.http.get<PokemonRatingSummaryApiResponse>(`${this.backendURL}/get/${pokemon.name}`)
    .pipe(catchError(this.handleError));
  }

  saveRating(rating: PokemonRatingDto): Observable<PokemonRatingSummaryApiResponse> {
    return this.http.post<PokemonRatingSummaryApiResponse>(`${this.backendURL}/save`, rating)
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
