import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PokemonIndexComponent } from './component/pokemon-index/pokemon-index.component';

export const routes: Routes = [
    {path:'', redirectTo: '/pokemon-index', pathMatch: 'full'},
    {path:'pokemon-index', component: PokemonIndexComponent},
    {path:'pokemon-detail/:pokemonName', component: PokemonDetailComponent}
];
