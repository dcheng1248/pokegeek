import { Ability } from "./ability";
import { Species } from "./species";
import { Stat } from "./stat";
import { Type } from "./type";

export interface PokemonDetail {

    sprites: {
        front_default: string
    },
    stats: Stat[],
    species: Species,
    abilities: Ability[],
    types: Type[]

}