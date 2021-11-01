import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const interval$ = new Observable<number>(subscriber => {

    // crear un contador
    let contador = 0;
    const interval = setInterval(() => {
        // cada segundo se emite un valor
        contador++;
        subscriber.next(contador);
        console.log("Interval: " + contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
        console.log("Completado");
    }, 2500);

    return () => {
        // cuando se cancela el observable
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription: Subscription = interval$.subscribe(observer);
const subscription2: Subscription = interval$.subscribe(observer);
const subscription3: Subscription = interval$.subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
}, 6000);