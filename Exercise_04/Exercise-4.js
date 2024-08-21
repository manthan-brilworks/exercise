const button=document.getElementById('btn');
button.addEventListener('click',()=>{
    if (button.innerHTML === 'Click me!') {
        button.innerHTML = 'Clicked!';
    } else {
        button.innerHTML = 'Click me!';
    }
});

const con= document.getElementById('con');
con.addEventListener('mouseover',()=>{
    con.style.backgroundColor = 'red';
});

con.addEventListener('mouseout',()=>{
    con.style.backgroundColor = 'lightblue';
});

const form= document.getElementById('form');

form.addEventListener('submit',()=>{
    alert("Form is submitted");
       
})