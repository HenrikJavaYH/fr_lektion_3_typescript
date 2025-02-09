   export interface sidekick {
    name: string
    cape: string
    abilities: string
}

export interface Superhero {
    name: string
    alter_ego: string
    cape: string
    archenemy: string
    vehicle: boolean
    gadgets: boolean
    superpowers: boolean
    weakness: string
    sidekicklist: sidekick[]
}