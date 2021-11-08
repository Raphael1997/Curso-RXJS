import { filter, fromEvent, map, mapTo, pluck, range } from "rxjs";

/* range(1, 5)
    .pipe(
        // map<entrada,salida>()
        map<number, string>(x => (x * 10).toString()),
    )
    .subscribe(console.log); */

const keyupMap$ = fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
        map((e: KeyboardEvent) => e.code)
    );

const keyupPluck$ = fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
        pluck("target", "baseURI")
    );

const keyupMapTo$ = fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
        mapTo("tecla presionada")
    );

keyupMapTo$.subscribe(code => console.log("MapTo: ", code));
keyupMap$.subscribe(code => console.log("Map: ", code));
keyupPluck$.subscribe(code => console.log("Pluck: ", code));    