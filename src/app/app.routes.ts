import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

export const routes: Routes = [
    {path:'', redirectTo: '/pokemon', pathMatch: 'full'},
    {path:'pokemon', component: PokemonComponent},
    {path:'pokemon-detail/:pokemonName', component: PokemonDetailComponent}
];
