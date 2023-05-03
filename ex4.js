// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// A continuación tienes algunos tickets de tareas de GitHub


const items = [
    {
        "id": 1,
        "text": "Learn about Polymer",
        "created_at": "Mon Apr 26 06:01:55 +0000 2015",
        "Tags": [
            "Web Development",
            "Web Components"
        ],
        "is_complete": true
    },
    {
        "id": 2,
        "text": "Watch Pluralsight course on Docker",
        "created_at": "Tue Mar 02 07:01:55 +0000 2015",
        "Tags": [
            "Devops",
            "Docker"
        ],
        "is_complete": true
    },
    {
        "id": 3,
        "text": "Complete presentation prep for Aurelia presentation",
        "created_at": "Wed Mar 05 10:01:55 +0000 2015",
        "Tags": [
            "Presentation",
            "Aureia"
        ],
        "is_complete": false
    },
    {
        "id": 4,
        "text": "Instrument creation of development environment with Puppet",
        "created_at": "Fri June 30 13:00:00 +0000 2015",
        "Tags": [
            "Devops",
            "Puppet"
        ],
        "is_complete": false
    },
    {
        "id": 5,
        "text": "Transition code base to ES6",
        "created_at": "Mon Aug 01 10:00:00 +0000 2015",
        "Tags": [
            "ES6",
            "Web Development"
        ],
        "is_complete": false
    }
];

// Usa el método .some para averiguar si existe alguna tarea que contenga el texto "Ballena". Piensa bien que campo deberías comprobar.

let encuentraBallena = items.some((ticket) => ticket.text.includes('Ballena'));

console.log(encuentraBallena); //TODO. Resultado esperado: false

// Ahora usa el método .some para averiguar si existe una tarea etiquetada con un tag "ES6" en alguno de los elementos del array.

console.log(items.some((ticket) => ticket.Tags.includes('ES6'))); //TODO. Resultado esperado: true (la última!)

