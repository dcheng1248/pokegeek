import { Ability } from "./ability";
import { Stat } from "./stat";
import { Type } from "./type";

export interface PokemonDetail {

    sprites: {
        front_default: string
    },
    stats: Stat[],
    abilities: Ability[],
    types: Type[],
    weight: number,
    height: number

}