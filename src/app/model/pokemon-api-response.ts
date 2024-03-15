import { PokemonBasic } from "./pokemon-basic";

export class PokemonApiResponse {

    constructor(
        public count: number,
        public next: string,
        public results: PokemonBasic[]
    ) {}

}