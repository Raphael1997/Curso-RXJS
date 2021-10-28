import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const obs$ = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);

    // Forzar un error
    // const a = undefined;
    // a.nombre = "Raphael";
    subscriber.complete();

    // Despues del complete ya no se recibe ningún valor, aunque sigas emitiendo dato
    subscriber.next(6);
    subscriber.next(7);
});

obs$.subscribe(observer);
// obs$.subscribe({
//     next: (value: number) => console.log(value),
//     error: (error: any) => console.warn(error),
//     complete: () => console.log('complete')
// });

// Otra forma de hacerlo
//obs$.subscribe(resp => console.log(resp));

// Otra forma de hacerlo - esta deprecated
// obs$.subscribe(
//     valor => console.log("next: ",valor),
//     error => console.log("error: ",error),
//     () => console.info('complete')
// );