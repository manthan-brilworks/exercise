let count=0;
const add = document.getElementById('add');
add.addEventListener('click',()=>{    
    
    const ullist = document.getElementById('ullist');
    const list=document.createElement('li');
    list.append(document.createTextNode(`Item ${count}`));
    ullist.appendChild(list)
    count=count+1;
})

const change=document.getElementById('text');
change.addEventListener('click',()=>{
    
    change.innerHTML='Text Changed';
})

const extext=document.getElementById('exampletext');
extext.addEventListener('click',()=>{
    extext.style.fontSize='4rem';
    extext.style.color='green';
})