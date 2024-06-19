import * as User from "../models/UserModel.js";
User.init()
let user = User.getUserLogged()
let userInfo = document.querySelector("#userinformation")
let userAvatar = document.querySelector("#avatar")
let confirmPass= document.querySelector("#confirmpass")
let userIndex = User.findIndexUser(user.username)
//document.getElementById("confirminfo").disabled = true
function UserInformation() {





userInfo[0].defaultValue = user.name
userInfo[1].defaultValue = user.username
userInfo[2].defaultValue = user.email
userInfo[3].defaultValue = user.phone
userInfo[4].defaultValue = user.password
userInfo[0].readOnly = true
userInfo[1].readOnly = true
userInfo[2].readOnly = true
userInfo[3].readOnly = true
userInfo[4].readOnly = true
confirmPass.style.display = 'none'
userAvatar.src= user.avatar



}
UserInformation()

//Clicar no Botao EDIT

const btnEdit = document.querySelector('#editinfo')


const btnConfirm = document.querySelector("#confirminfo")

btnEdit.addEventListener('click',(e)=> {
    e.preventDefault();
    userInfo[0].readOnly = false
    userInfo[2].readOnly = false
    userInfo[3].readOnly = false
    userInfo[4].readOnly = false
    confirmPass.style.display = 'inline-block'

    document.querySelector('#inputavatar').innerHTML =  `<input type="file" id="img" name="img" accept="image/* defaultImgSrc:../images/avatar">`






    btnConfirm.addEventListener('click',(e)=> {
        e.preventDefault();

        let name=userInfo[0].value 
        let email=userInfo[2].value 
        let phone=userInfo[3].value
        let password=userInfo[4].value
        let confirmPassword=userInfo[5].value
        let srcAvatar = document.querySelector('#img').value
        srcAvatar = srcAvatar.replace("C:\\fakepath\\","/images/avatar/")
        
        if(password==null || password!==confirmPassword) {
            alert("Please enter the same password in two different places")

        }else{

            User.change(password, name,email, phone,userIndex,srcAvatar)
            location.reload()


        }
    






    })})


function renderUserTopScore(){
let topScore= document.querySelector(".summary-card")


// guarda num array os utilizadores ordenados pela pontuaçao
let users = User.userClassification()


//insere cada utilizador do array
let result=`<h2>User Top Score</h2>
<br>`
for (const user of users) {
    result+=`<div class="summary-single">
                            <div ></div>
                            <div>
                                <h5>${user.username}</h5>
                                <small>${user.score} pts</small>
                            </div>
                        </div>`
    
}
topScore.innerHTML=result


let userPont=document.querySelector("#userPontuation")
userPont.innerHTML=`<div class="summary-single">
                                <div ></div>
                                <div>
                                    <h5>${user.name}</h5>
                                    <small>${user.score}</small>
                                </div>
                            </div>`

}
renderUserTopScore()
