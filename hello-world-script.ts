import { sidekick,Superhero}from "./Types/WorkLab"
function helloWorld() {
    console.log("Hello World :")
}

//helloWorld()

const robin: sidekick = {
    name: "Robin",
    cape: "",
    abilities: ""
}

const superHero: Superhero = {
    name: "Batman",
    cape: "black",
    alter_ego: "Bruce",
    archenemy: "Red hood",
    vehicle: false,
    gadgets: true,
    superpowers: false,
    weakness: "Snakeclowns",
    sidekicklist: [robin]



}