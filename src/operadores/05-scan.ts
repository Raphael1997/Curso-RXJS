import { from, map, reduce, scan } from "rxjs";
import { ids } from "webpack";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numbers)
    .pipe(
        reduce(totalAcumulador)
    )
    .subscribe(console.log);

//Scan
from(numbers)
    .pipe(
        scan(totalAcumulador)
    )
    .subscribe(console.log);

//Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const users: Usuario[] = [
    { id: "fher", autenticado: false, token: null },
    { id: "fher", autenticado: true, token: "ABC" },
    { id: "fher", autenticado: true, token: "ABC123" },
];

const state$ = from(users).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur };
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);