const menubar = document.getElementById('menubar')
const navbar = document.getElementById('navbar')

if(menubar){
  menubar.addEventListener('click',()=>{
    navbar.style.left = '-40px';
    
  })
}
const menuclose = document.getElementById('closemenubar')
if(menuclose){
  menuclose.addEventListener('click',()=>{
    navbar.style.left = '-170px'
  })
}

let user = sessionStorage.getItem('login')


let loginlink = document.getElementById('login')
if(user !== null){
console.log(user)
   loginlink.innerHTML = `<i class="fa-regular fa-user" style="margin-right: 4px;"></i>${user}`
    document.getElementById('login-box').style.paddingRight = "10px";
}
