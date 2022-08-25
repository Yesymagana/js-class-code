function log(text){
    const div = document.createElement('pre');
    document.body.appendChild(div);
    div.innerText = text;


    div.style.paddingLeft = '10px';
    div.style.fontSize = '20px';
    div.style.fontWeight = 'bolder';
    div.style.boxShadow = '0 0 2px #000';
    div.style.backgroundColor = '#fff';
    div.style.padding = '10px';
    div.style.margin = '4px 10px';

    if (typeof text === 'number'){
        div.style.color = 'blue';
    }
    if (typeof text === 'string'){
        div.style.color = 'red';
    }
    if (typeof text === 'boolean'){
        div.style.color = 'green';
    }
    if (typeof text === 'object') {
        div.style.color = 'purple';
        div.innerText = JSON.stringify(text, null, 3); // this line of code turns the object into strings of text, otherwise it would not show up on our html page
    }
    if (Array.isArray(text)) {
        div.style.color = 'orange';
        div.innerText = JSON.stringify(text, null, 3);
    }
}

log(1);
log(2);
log(3);
log('text');
log(true);
log({
    name: 'John',
    age: 30,
    job: {
        title: 'developer',
    }
});
log([0, '', false, null, undefined, NaN]);
log(new Date());
log(Math.random());

// Method = object with a function bound to it || functions with an object attached to it 

const user = {
    name: 'John',
    age: 30,
    job: {
        title: 'developer',
    },
    greet: greet
}

const user2 = {
    name: 'Joe',
    age: 35,
    job: {
        title: 'senior developer',
    },
    greet: greet
}

function greet() {
    log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old' + ' and I am a ' + this.job.title);
}
user.greet();
user2.greet();