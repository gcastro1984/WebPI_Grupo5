import * as User from "../models/UserModel.js";

function navbarView() {

    User.init()


    //Construir Conteudo da NavBar

    let result =` <div class="container-fluid">
    <!--Logo e marca-->
    <img class="navbar-brand" src="/images/logofinal.png" alt="TSIW" width="120" height="50">

    <!--Botão toggler e nav-links-->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/html/campus.html">Campus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/html/degree.html">Degree</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/html/alumni.html">Alumni</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/html/future.html">Future You</a>
        </li>
      </ul></div>`
      

if (User.isLogged()){
  result +=`<div id="authButtons" class="ms-auto m-1">
  Olá <a href="html/userhome.html?username=${User.getUserLogged().username}',
  '_blank">${User.getUserLogged().username}</a>
  <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
      Logout
  </button>
  <img id="avatar" src="${User.getUserLogged().avatar}" alt="Avatar" class="avatar">
</div>`
}else{result +=`<form class="d-flex" role="search">
<input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#login-modal">Login</button>
</form>
</div>
</div>`
}





  //Injetar conteúdo para navbar
    document.querySelector("nav").innerHTML = result;






//Clicar no botao Login

document.querySelector("#frmLogin").addEventListener("submit", (event) => {
  event.preventDefault();
  
  try {
    User.login(
      document.getElementById("txtUsername").value,
      document.getElementById("txtPassword").value
    );
    displayMessage("msgLogin", "User logged in with success!", "success");
    // Wait 1 second before reloading, so the user can see the login success message
    setTimeout(() => {
      location.reload();
    }, 1000);

  } catch (e) {
    //displayMessage("msgLogin", e.message, "danger");
  }
});
//Clicar Botao Logout ?"" - OPTIONAL CHAINING)

document.querySelector("#btnLogout")?.addEventListener("click", () => {
  User.logout();
  location.reload();
})


//Provura um event linstener sobre o avatar para abrir a pagina do utilizador
document.querySelector("#avatar")?.addEventListener("click", () => {

  if(User.getUserLogged().type=="admin"){
    window.open(
      'html/adminhome.html?username=${User.getUserLogged().username}',
      '_blank') // <- Th

  }
  //window.location.href=`html/userhome.html?username=${User.getUserLogged().username} "_blank"`
  window.open(
  'html/userhome.html?username=${User.getUserLogged().username}',
  '_blank' // <- This is what makes it open in a new window.
);


})
}

//Clicar botao Register
document.querySelector("#registerUser").addEventListener("submit",(event) =>{
  event.preventDefault()
  if (document.getElementById("txtregpass").value!==document.getElementById("txtregconfpass").value) {
    alert(`Password error`)
    
  } else { User.add(document.getElementById("txtregeusername").value,document.getElementById("txtregpass").value,document.getElementById("txtregname").value,document.getElementById("txtregemail").value,document.getElementById("regphone").value,document.getElementById("regphone").value)
    displayMessage("msgRegister", "User registered with success!", "success");
    // Wait 1 second before reloading, so the user can see the login success message
    setTimeout(() => {
      location.reload();
    }, 1000);

    
  }
  
 
})


function displayMessage(modal, message, type) {
  const divMessage = document.getElementById("login-modal");
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}
navbarView()
