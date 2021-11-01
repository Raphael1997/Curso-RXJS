import { of } from 'rxjs';
import { first } from "rxjs/operators";

// const obs$ = of(1,2,3,4,5,6,7,8,9,10);
// const obs$ = of(...[1,2,3,4,5], [6,7,8,9,10]);
//const obs$ = first(x => x > 5)(of(2,4,5));
const obs$ = (of(...[1, 2, 3, 4, 5], { name: "Raphael", age: 15 }, function () { }, true, Promise.resolve(true)));

console.log("Inicio del Obs$");

obs$.subscribe({
    next: (val) => console.log('next', val),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete')
});
console.log("Fin del Obs$");
