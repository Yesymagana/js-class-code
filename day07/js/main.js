// steps to create & append items to our html body = 
// 1. create the variable and the element
    // const h1 = document.createElement('h1');
// 2. create the text/html
    // h1.innerText = 'Hello';
// 3. append to body
    // document.body.appendChild(h1);
// 4. add event listener so a change can occur
    /* h1.addEventListener('click', () => {
        h1.style.color = 'orange';
    }) */


// for (let i = 0; i < 10; i++) {
//     const h1 = document.createElement('h1');
//     h1.innerText = 'Hello World';
//     document.body.appendChild(h1);
//     h1.addEventListener('click', () => {
//         h1.style.color = 'red';
//     });
// }



const h2 = document.createElement('h2');
h2.innerText = 'Hola!';
document.body.appendChild(h2);
h2.addEventListener('click', () => {
    h2.style.color = 'orange';
})

const h3 = document.createElement('h3');
h3.innerHTML = '<span>Bonjour!</span>';
document.body.appendChild(h3);
h3.addEventListener('mouseenter', () => {
    h3.style.color = 'purple';
})
h3.addEventListener('mouseleave', () => {
    h3.style.color = 'black';
})

for (let i = 0; i < 5; i++) {
    const h4 = document.createElement('h4');
    h4.innerHTML = '<span>Ciao!</span>';
    document.body.appendChild(h4);
    h4.addEventListener('mouseenter', () => {
        h4.style.color = 'green';
    })
    h4.addEventListener('mouseleave', () => {
        h4.style.color = 'black';
    })
}








// Vinson's main.js code:
for(let i = 0; i < 2; i++) {
    const h1 = document.createElement('h1'); 
    h1.innerHTML = 'Hello World';
    document.body.appendChild(h1);
    h1.addEventListener('click', () => {
        h1.style.color = 'red';
    });
}

fetch('http://pokeapi.co/api/v2/pokemon/').then((response) => {
    return response.json();
}).then((data) => {
    data.results.forEach((pokemon) => {
        const h1 = document.createElement('h1');
        h1.innerText = pokemon.name;
        document.body.appendChild(h1);
    });
})