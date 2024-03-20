import { PokemonDetail } from "./pokemon-detail";

export interface Pokemon {

    name: string,
    url: string,
    id?: number,
    rating?: number,
    rating_number?: number,
    details?: PokemonDetail

}