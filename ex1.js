// map

// Utiliza el método .map para devolver un nuevo array que indique el número de carácteres que tiene cada string JUNTO al stirng original, separado por un '-'

let strings = ["hello", "what", "is", "up", "dude"];

let resultado = strings.map((string) => string + '-' + string.length); // TODO

console.log(resultado); // [hello-5, what-4, is-2, up-2, dude-4]

