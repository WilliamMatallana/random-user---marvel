let public_key = 'c25714cd69d137ec91db8032d302435c';
let private_key = 'a243134a57aabb9712b4fcc9a0d2e29d9afad7e2'
let hash = '3e1bf0bf081d2c2b67e9b5824885494a';


let input = document.getElementById('buscar');
let buscar = document.getElementById('boton-busqueda');
let limpiar = document.getElementById('limpiar-busqueda');
let informacionResultado = document.getElementById('resultados');

buscar.addEventListener('click', Marvel);
limpiar.addEventListener('click', limpiarBusqueda);

function Marvel(){

    let busqueda = input.value;
    let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&apikey=${public_key}&ts=1000&hash=${hash}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            informacionResultado.innerHTML = '';
            
            let results = json.data.results;
            results.map(item => {
                let img = document.createElement('img');
                img.src = item.thumbnail.path + '.' + item.thumbnail.extension;
                img.classList.add('imagenes');
                informacionResultado.append(img);
                
                let name = document.createElement('h3');
                name.textContent = item.name;
                informacionResultado.append(name);
            });
        })
};

function limpiarBusqueda() {
    informacionResultado.innerHTML = '';
    input.value = '';
};


