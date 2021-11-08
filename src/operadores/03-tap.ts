import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(val => val * 10),
    tap({
        next: val => console.log('despues', val),
        complete: () => console.log('termino todo') 
        // el complese se ejecuta cuando todo el observable se completa
    })
)
    .subscribe(val => console.log('subs', val));