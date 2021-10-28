import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6,7,8,9,10);
// const obs$ = of(...[1,2,3,4,5], [6,7,8,9,10]);
const obs$ = of([1,2,3,4,5], {name: "Raphael"}, function(){}, true, Promise.resolve(true));


console.log("Inicio del Obs$");

obs$.subscribe({
    next: (val) => console.log('next', val),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete')
});
console.log("Fin del Obs$");
