import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const interval$ = new Observable<number>(subscriber => {
   
    // crear un contador
    let contador = 0;
    const interval = setInterval( () => {
        // cada segundo se emite un valor
        contador++;
        subscriber.next(contador);
        console.log(contador);
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 2500);

    return () => {
        // cuando se cancela el observable
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2);
subscription.add(subscription3);


setTimeout(() => {
    subscription.unsubscribe();
}, 6000);