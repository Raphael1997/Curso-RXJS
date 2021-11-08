import { filter, from, fromEvent, map, range } from "rxjs";

range(1, 20)
    .pipe(
        filter(x => x % 2 === 0)
    )//.subscribe(x => console.log(x));

interface Personaje {
    nombre: string;
    tipo: string;
}

const personajesOnePiece: Personaje[] = [
    {
        nombre: "Luffy",
        tipo: "Pirata"
    },
    {
        nombre: "Zoro",
        tipo: "Pirata"
    },
    {
        nombre: "Aokijill",
        tipo: "Marina"
    },
    {
        nombre: "Garp",
        tipo: "Marina"
    }
]


from(personajesOnePiece)
    .pipe(
        filter(x => x.tipo === "Pirata")
    )//.subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map((e: KeyboardEvent) => e.code),
        filter(key => key === 'Enter')
    )

keyup$.subscribe(console.log);