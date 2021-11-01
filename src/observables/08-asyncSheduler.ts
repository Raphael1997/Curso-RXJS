import { asyncScheduler, Subscription } from "rxjs";

/* 
    Se puede generar estas funciones utilizando el 
    asyncScheduler.
setTimeout(() => {}, 3000);
setInterval(() => {}, 3000); */

const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre: string) => console.log('Hola ' + nombre);
const saludar3 = (nombre: string, apellido: string) => console.log('Hola ' + nombre + " " + apellido);

// El segundo argumento es el delay
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 1000, 'Pepe');
asyncScheduler.schedule(saludar3.bind(this, "Raphael", "Rodrigues"), 3000);

// no puede ser un arrow function
const subs: Subscription = asyncScheduler.schedule(function (state) {

    console.log("state", state);

    this.schedule(state + 1, 1000);

}, 1000, 10);

/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);