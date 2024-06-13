let users=[];


//Carregar Utilizador da localstorage

export function init(){
    if(localStorage.users){

        const tempUsers = JSON.parse(localStorage.users)
        for(let user of tempUsers){
            users.push(new User(user.username,user.password,user.name,user.email,user.phone,user.type,user.score,user.active,user.avatar)); 
            
        }
    }else{
        users=[];
        }
    
}

//Adicionar user

export function add(username, password, name, email,phone,type,score,active,avatar){
    if(users.some((user) => user.username===username)){
        alert(`User ${username} already exists`)
    } else {
        
        users.push(new User(username, password, name, email,phone,type,score,active,avatar))
        localStorage.setItem("users",JSON.stringify(users))
    
        
    }
}


//Alterar dados User

export function change(password, name, email, phone,userIndex,srcAvatar) {
    
        users[userIndex].password=password
        users[userIndex].name = name
        users[userIndex].email = email
        users[userIndex].phone = phone
        users[userIndex].avatar = srcAvatar
        //Atualizar sessionStorage
        sessionStorage.setItem("loggedUser", JSON.stringify(users[userIndex]))
        
        localStorage.setItem("users",JSON.stringify(users))
    }



    


//Login user

export function login(username,password){
    const user = users.find((user) => user.username===username && user.password===password);
   
    if(user){
    sessionStorage.setItem("loggedUser", JSON.stringify(user))
    return true
    }else{
        throw Error("Invalid login!")
    }

}

//Logout do utilizador
export function logout(){
    sessionStorage.removeItem("loggedUser")
}

//verifica existencia de alguem autenticado

export function isLogged(){
    return sessionStorage.getItem("loggedUser") ? true : false
}

//Devolve Utilizador Autenticado
export function getUserLogged(){
    return JSON.parse(sessionStorage.getItem("loggedUser"))
}


//saber a posicao do utilizador no array
export function findIndexUser(username){
    
    const userIndex = users.findIndex(user => user.username == username)
    return  userIndex
  
        }
    
export function updateScore(score){
    let UserLogged=getUserLogged()
    const tempUsers = JSON.parse(localStorage.users)


    for (const user of tempUsers) {
       
        if(user.username==UserLogged.username){
            
            user.score+=score
            sessionStorage.setItem("loggedUser", JSON.stringify(user))

        }
        localStorage.setItem("users",JSON.stringify(tempUsers))
        
    }
    
    //localStorage.setItem("users",JSON.stringify(users))
}
  
    
export function getUsers(){

            return users
        
        }   

// Remover Utilizador

export function remove(username) {
    //cria um novo array filtrando os que são diferentes do username atraves da função  
    users=users.filter((user)=>user.username !== username);
 

    //guarda na localSotrage esse novo array
    localStorage.setItem("users", JSON.stringify(users))


}


//ALterar dados user pelo Admin
export function changeAdmin(username, password, name, email,phone,type,score,active,posicao,){

     {

        users[posicao].username=username
        users[posicao].password=password
        users[posicao].name = name
        users[posicao].email = email
        users[posicao].phone = phone
        users[posicao].type = type
        users[posicao].score=score
        users[posicao].active=active
        //Atualizar sessionStorage
        sessionStorage.setItem("loggedUser", JSON.stringify(users[posicao]))
        
        localStorage.setItem("users",JSON.stringify(users))
    }



}

//Funcao para adicionar utilizador pelo admin
export function addAdmin(username, password, name, email,phone,type,score){
    if(users.some((user) => user.username===username)){
        alert(`User ${username} already exists`)
    } else {
        
        users.push(new User(username, password, name, email,phone,type,score))
        localStorage.setItem("users",JSON.stringify(users))
        
        
    }
}


//Funcao que envia os utilizadores por ordem pontual

export function userClassification(){
    users.sort((a,b)=>(a.score<b.score) ? 1:-1)
    console.log(users)
    return users
}

//Classe  User


class User {
 username = "";
 password = "";
 name ="";
 email="";
 phone="";
 type="";
 score= "";
 active="";
 avatar=""

 constructor(username, password,name,email,phone,type,score=0,active=true,avatar="/images/avatar/avatar.png") {
   this.username = username;
   this.password = password;
   this.name = name;
   this.email = email;
   this.phone = phone;
   this.type = type;
   this.score = score;
   this.active = active;
   this.avatar = avatar;
 }
}