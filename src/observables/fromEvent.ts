import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (value: any) => console.log('next: ', value)
}

src1$.subscribe(ev => {
    console.log(ev.screenX, ev.screenY);

});
src2$.subscribe(({ key }) => {
    console.log(key);
});