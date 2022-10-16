// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for (const country of countries) {
    let li$$ = document.createElement('li');
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement$$ = document.querySelector('.fn-remove-me');
removeElement$$.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > 
// li de elementos 
// en el div de html con el atributo data-function="printHere".

const ul1$$ = document.createElement('ul');
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
for (const car of cars) {
    let li1$$ = document.createElement('li');
    li1$$.textContent = car;
    ul1$$.appendChild(li1$$);  
}
const divHtml$$ = document.querySelector('[data-function="printHere"]');
divHtml$$.appendChild(ul1$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga 
// un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const listOfDiv$$ = document.createElement('ul');

for (const country2 of countries2) {

    let countryItems$$ = document.createElement('div');

    let h4$$ = document.createElement('h4');
    h4$$.textContent = country2.title;

    let img$$ = document.createElement('img');
    img$$.src = country2.imgUrl;
    // img$$.setAttribute("src", country.imgUrl);

    countryItems$$.appendChild(h4$$);
    countryItems$$.appendChild(img$$);

    document.body.appendChild(countryItems$$);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que 
// elimine el último elmento de la lista.

const button$$ = document.createElement('button');
function eliminarUltimo () {

    const divs$$ = document.querySelectorAll('div');
    divs$$[divs$$.length - 1].remove();
}
button$$.addEventListener('click', eliminarUltimo);
button$$.textContent = "Eliminar";


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

for (const country of countries) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;
  
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
  
    createCountryItem.appendChild(deleteButton);
  
    deleteButton.addEventListener("click", function () {
      createCountryItem.remove();
    });
  
    document.body.appendChild(createCountryItem);
  }


