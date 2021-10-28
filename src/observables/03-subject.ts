import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('[Error]: ', error),
    complete: () => console.info('[Complete]')
};

const intervalo$ = new Observable<number>(subs => {

    const interval = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});

/**
 * 1.- Casteo múltiple
 * 2- Tambien es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
const subscrition = intervalo$.subscribe(subject$);

// const subs1: Subscription = intervalo$.subscribe(random => console.log('Subs1: ', random));
// const subs2: Subscription = intervalo$.subscribe(random => console.log('Subs2: ', random));
// const subs3: Subscription = intervalo$.subscribe(random => console.log('Subs3: ', random));


// Los valores en ambas subscripciones son iguales
const subs1: Subscription = subject$.subscribe(observer);
const subs2: Subscription = subject$.subscribe(observer);

setInterval(() => {
    subject$.next(10);
    subject$.complete();

    subscrition.unsubscribe();
}, 7000);


