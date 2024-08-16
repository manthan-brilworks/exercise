const form=document.getElementById('form');

form.addEventListener('submit',(e)=> {
  e.preventDefault();  
  let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    if (name === '' || email === '' || password === ''){
      alert("All fields are required");
      return;
    }
    if (password.length < 6){
      alert("Password must be 6 characters long");
      return;
    }
    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(email)){
       alert("Invalid Email Format");
       return ;
    }
    form.submit();
   }
)