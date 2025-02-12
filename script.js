bucle();

let img = document.querySelector('#principal img');

img.addEventListener('mouseover', (e) => {
    e.target.style.width = "400px";
});

img.addEventListener('mouseout', (e) => {
    //e.target.style.width = "";
    e.target.style.width = "300px";
});

let btn = document.querySelector('.btn');

btn.addEventListener('click',(e) => {
    let nombre = document.querySelector('.text').value || '';

    alert('Hola Usuario ( '+nombre+' ).')
})

document.body.addEventListener('dblclick',(e)=> {
    let li = document.createElement('li');
    li.textContent = 'Me gusta aprender cosas nuevas;'
    document.querySelector('ul').appendChild(li);
});