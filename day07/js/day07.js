const h1 = document.querySelector('h1');
const h1s = document.querySelectorAll('.heading1'); // querySelectorAll targets ALL items that match what we specify in the parenthesis
// console.log('h1', h1[0], h1[1]);


// h1[0].innerHTML = '<span>Goodbye</span>'; // innerHTML & innerText are different! innerText will not try to decipher the <span></span> (it'll show up as pure text <span>Goodbye</span>) whereas innerHTML will decipher it 
// h1[1].innerHTML = '<span>Adios</span>';

// h1[0].style.color = 'red'; // targets and styles as specified
// h1[1].style.color = 'blue';

// h1[1].addEventListener('click', () => {
//     h1[1].style.color = 'orange';
// });

// h1[0].addEventListener('mouseenter', () => {
//     h1[1].style.color = 'green';
// });
// h1[0].addEventListener('mouseleave', () => {
//     h1[1].style.color = 'blue';
// });

// h1[0].addEventListener('mouseover', () => {
//     h1[1].style.color = 'green';
//     console.log('hover')
// });

h1s.forEach(h1 => {
    console.log(h1);
});



// FOR LOOP --> Always need to have a starting point and a place to end

for(let i = 0; i < 10; i++) {
    console.log(i);
    const h1 = document.createElement('h1');
    h1.innerText = i;
    document.body.appendChild(h1);
}

// While loop --> loops through a block of code as long as a specified condition is true

console.log('*******')
let i = 0;
while(i < 10) {
    console.log(i);
    i+= Math.floor(Math.random() * 10);
}
