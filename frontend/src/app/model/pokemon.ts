import { PokemonDetail } from "./pokemon-detail";

export interface Pokemon {

    name: string,
    url: string,
    id?: number,
    details?: PokemonDetail

}