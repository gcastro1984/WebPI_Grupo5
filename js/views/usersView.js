import * as User from "../models/UserModel.js";

function tableUsers(){

    User.init()


//Adiciona a linha para novo event
        let result=`<tr>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>
            <input id="new" type="submit" value="New"  class="badge new"></
        </td>
    </tr>`

        let users=User.getUsers()

        //Injetar no card o numero de User
        //document.querySelector("#userslenght").innerHTML=users.length

        for (const user of users){
            result+=generateLineTable(user)
        }
    
        //Adicionar linhas
        document.querySelector("#tableUser").innerHTML=result
    
    }
    
    function generateLineTable(user) {
    
        let result=`<tr><td>${user.username}</td><td>${user.password}</td><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.type}</td><td>${user.score}</td></div></td><td><input type="submit" value="Edit"  class="badge edit"><input type="submit" value="Delete"  class="badge delete"><div class="status-check">
        <input type="checkbox" data-id="${user.active}" ${user.active ?"checked":"" } id="status" disabled><label for="status">Status</label>
    </div> </td></tr>`
    
      return result
    }  


    tableUsers()
    



    //Clicar no Botao EDIT
    const btnsEdit = document.getElementsByClassName('badge edit')
    
    
     
    for (const btn of btnsEdit){
        btn.addEventListener('click',(e)=> {
            e.preventDefault();

            //guarda a linha onde o evento edit foi ativado
            const row = e.target.parentElement.parentElement;
            
            // guarda as celulas da linha onde o evento edit foi ativado
            const cells = row.getElementsByTagName('td');
            
            

            if(btn.value=="Edit"){
                for(let i=0; i<cells.length-1; i++){
                    let cellValue = cells[i].innerText
                    cells[i].innerHTML = `<input type="text" class="responsive-table data" value="${cellValue}">`
                    
                } 
                

                btn.value ="Save"
                //ALterar coluna 3 para fazer upload imagem
                cells[5].innerHTML = `<select name="type" id="type" required>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                </select>`
                //satus deve estar ativo no modo ediçao
                row.querySelector("#status").disabled = false;

            }else{

                    //recolhe os dados editados na linha da tabela para serem guardados
            
                        let username = cells[0].querySelector('input').value;
                        let password = cells[1].querySelector('input').value
                        let name = cells[2].querySelector('input').value

                        let email = cells[3].querySelector('input').value
                        let phone= cells[4].querySelector('input').value
                        let type= cells[5].querySelector('select').value
                        let score= cells[6].querySelector('input').value
                        let status = cells[7].querySelector('#status').checked
                    


                      
                // convert o valor para um inteiro e ajusta à correta posição no array
                let posicao =parseInt(row.rowIndex)-2
                let users=User.getUsers()
    
                //valida se o utilizador já existe no array, excluindo o proprio
                if(users.some((user) => user.username == username && users[posicao].username!=username)) {
                    throw Error(` The User  ${username} already exists`)

                }else
                User.changeAdmin(username, password, name, email,phone,type,score,status,posicao)
                alert("Success")
                //carrega novamente a tabela
                tableUsers()
                //refresh à pagina 
                location.reload()

            }
        })
    }
    
//Clicar no botao remove

const btnsRemove = document.getElementsByClassName("badge delete");



for (const btn of btnsRemove){
    btn.addEventListener('click',(e)=> {
            //guarda a linha onde o evento edit foi ativado
            const row = e.target.parentElement.parentElement;
            const cells = row.getElementsByTagName('td');
            let cellValue = cells[0].innerText
         

        if(confirm("Are you sure you want delete this user?")) {

            User.remove(cellValue)
            location.reload();

        }
    })
       

}



//Clicar botao New

const btnNew = document.querySelector("#new");
btnNew.addEventListener('click',(e)=> {
    e.preventDefault();
    
    const newRow = e.target.parentElement.parentElement;
            
    // guarda as celulas da linha onde o evento edit foi ativado
    const newCells = newRow.getElementsByTagName('td');

    if(btnNew.value=="New"){
        for(let i=0; i<newCells.length-1; i++){
            newCells[i].innerHTML = `<input type="text" class="responsive-table data" value="">`
            
        } 
        
        btnNew.value ="Save"
                //ALterar coluna para select
                newCells[5].innerHTML = `<select name="type" id="type" required>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                </select>`


    }else{

        let username = newCells[0].querySelector('input').value;
        let password = newCells[1].querySelector('input').value
        let name = newCells[2].querySelector('input').value

        let email = newCells[3].querySelector('input').value
        let phone= newCells[4].querySelector('input').value
        let type= newCells[5].querySelector('select').value
        let score= newCells[6].querySelector('input').value
       
    

        

        User.addAdmin(username, password, name, email,phone,type,score)
        alert(`${username} add with success!` )
        //carrega novamente a tabela
        tableUsers()
        //refresh à pagina 
        location.reload()


    }

})

function eventsLength(){

    let events= JSON.parse(localStorage.events)
    return events.length

}

document.querySelector("#eventsLength").innerHTML=eventsLength()

function projectsLength(){

    let projects= JSON.parse(localStorage.projects)
    return projects.length

}

document.querySelector("#projectsLength").innerHTML=projectsLength()

function usersLength(){

    let users= JSON.parse(localStorage.users)
    return users.length

}

document.querySelector("#usersLength").innerHTML=usersLength()
function testimonialsLength(){

    let testimonials= JSON.parse(localStorage.testimonials)
    return testimonials.length

}

document.querySelector("#testimonialsLength").innerHTML=testimonialsLength()
