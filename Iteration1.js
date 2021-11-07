//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

function addList (array) {array.forEach( element => {
	const lista = document.createElement('ul');
	let elementoLista = document.createElement('li');
	elementoLista.textContent = element;
	lista.appendChild(elementoLista);
	let print = document.querySelector("[data-function='printHere']");
	print.appendChild(lista);
})};

addList(countries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const body = document.querySelector('body');
const eliminar = document.querySelector('.fn-remove-me');
body.removeChild(eliminar);


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


function addListWithAttribute (array) {
	array.forEach( element => {
		const lista = document.createElement('ul');
		let elementoLista= document.createElement('li');
		elementoLista.textContent = element;
		lista.appendChild(elementoLista);
		let print = document.querySelector("[data-function='printHere']");
		print.appendChild(lista);
	})
};

addListWithAttribute(cars);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.


const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

function addDivs (array){
	let body = document.querySelector('body');
	array.forEach(element => {
		const div = document.createElement('div');
		div.classList.add('div-imagen');
		const h4 = document.createElement('h4');
		h4.textContent = element.title;
		const img = document.createElement('img');
		img.src = element.imgUrl;
		const btnRemove = document.createElement('button');
		btnRemove.innerText = 'Eliminar';
		btnRemove.addEventListener('click', removeElement);
		div.appendChild(h4);
		div.appendChild(img);
		div.insertBefore(btnRemove, img.nextSibling);
		body.appendChild(div);
	}
	)
}

addDivs(countries2);


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const removeBtn = document.createElement("button");
removeBtn.innerText = "Borrar";
body.appendChild(removeBtn);

removeBtn.addEventListener("click", borrarUltimoElemento);

function borrarUltimoElemento (){
	const lastElement = Array.from(document.querySelectorAll('.div-imagen')).pop();
	lastElement.remove();
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

function removeElement(e) {
	e.target.parentElement.remove();
}