import { interval, timer } from "rxjs";

const observer = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.warn("error: ", error),
    complete: () => console.log("complete")
}

const interval$ = interval(1000);
// const timer$ = timer(2000);
//const timer$ = timer(2000, 3000);

console.log("Incio");
//interval$.subscribe(observer);
//timer$.subscribe(observer);
console.log("Fin");
