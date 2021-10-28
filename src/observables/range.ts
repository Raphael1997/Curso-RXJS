import { of, range, asyncScheduler, Observable, observeOn } from 'rxjs'

const src$ = range(-5, 15).pipe(observeOn(asyncScheduler))

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
