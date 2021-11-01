import { interval, timer } from "rxjs";

const observer = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.warn("error: ", error),
    complete: () => console.log("complete")
}

const hoyEn5 = new Date(); // ahora 
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); // ahora + 5s

// emite valor a cada 1 segundo
const interval$ = interval(1000);
// Emite un valor con un delay y luego de se completa
// const timer$ = timer(1000);
// Emite un valor a cada 1s despues de 2s
//const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log("Incio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
