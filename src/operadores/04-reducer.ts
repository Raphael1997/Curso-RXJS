import { interval, reduce, take, tap } from "rxjs";


const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

const total = numbers.reduce(totalReducer, 10);

console.log("Total: ", total);

interval(1000)
.pipe(
    take(3),
    reduce(totalReducer, 0)
)
.subscribe({
    next: (value) => console.log("Next: ", value),
    complete: () => console.log("Complete")
})
