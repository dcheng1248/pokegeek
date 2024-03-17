import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PokemonIndexComponent } from './component/pokemon-index/pokemon-index.component';

export const routes: Routes = [
    {path:'', redirectTo: '/pokemon', pathMatch: 'full'},
    {path:'pokemon', component: PokemonIndexComponent},
    {path:'pokemon-detail/:pokemonName', component: PokemonDetailComponent}
];
