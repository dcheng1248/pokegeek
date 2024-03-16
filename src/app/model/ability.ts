export class Ability {
    constructor(
        public ability: {
            name : string,
            url: string
        },
        public is_hidden: boolean,
        public slot: number
    ){}
  }