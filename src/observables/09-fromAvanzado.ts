import { of, from } from 'rxjs'

/**
 * of -> Toma argumentos y genera una secuencia de valores
 * from -> array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

//const src = from([1, 2, 3, 4, 5, 6]);
//const src = of(...[1, 2, 3, 4, 5, 6]);

const src = from(fetch("https://api.github.com/users/klerith"));

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const iterable = miGenerador();
// obtener valores de un Generator
from(iterable).subscribe(observer);

/* src.subscribe(async(resp) => {

    const data = await resp.json();
    console.log(data);
});
 */

//src.subscribe(observer);