import * as Project from "../models/ProjectsModel.js";
//Carrega testemunhos na tabela
function tableProjects(){

    Project.init()


//Adiciona a linha para novo event
        let result=`<tr>
        <td>---</td>
     <td>---</td>
    <td>---</td>
    <td>---</td>
    <td class="td-team">
    <div class="img-0"></div>
     </td>
        <td>
        <input type="submit" value="New"  class="badge new">
 
         </td>
    </tr>`

        let projects=Project.getProjects()

        //Injetar no card o numero de eventos
        //document.querySelector("#eventslenght").innerHTML=events.length

        for (const project of projects){
            result+=generateLineTable(project)
        }
    
        //Adicionar linhas
        document.querySelector("#tableProjects").innerHTML=result
    
    }
    
    
    function generateLineTable(project) {
    
        let result=`<tr><td>${project.studentName}</td><td>${project.year}</td><td>${project.name}</td><td>${project.text}</td><td><iframe 
                    id="iframeVideo" 
                    title ="youtube video"
                    height="60" 
                    allow="autoplay; clipboard-write;picture-in-picture" 
                    src="${project.url}">
                 </iframe></div></td><td><input type="submit" value="Edit"  class="badge edit"><input type="submit" value="Delete"  class="badge delete"><div class="status-check">
        <input type="checkbox" data-id="${project.active}" ${project.active ?"checked":"" } id="status" disabled><label for="status">Status</label>
    </div> </td></tr>`
    
      return result
    }  

    tableProjects()
    



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
                    cells[i].innerHTML = `<input type="text" class="responsive-table data" value="${cellValue}" required>`
                    
                } 
                

                btn.value ="Save"
                //ALterar coluna 3 para fazer upload imagem
                cells[4].innerHTML = `<input type="url" class="img-4" id="youtubeVideo" width= 30 placeholder="URL ">`
                //satus deve estar ativo no modo ediçao
                row.querySelector("#status").disabled = false;

            }else{

                    //recolhe os dados editados na linha da tabela para serem guardados
            
                        let studentName = cells[0].querySelector('input').value;
                        let year = cells[1].querySelector('input').value
                        let name = cells[2].querySelector('input').value

                        let text = cells[3].querySelector('input').value
                        let url= cells[4].querySelector('input').value
                        let status = cells[5].querySelector('#status').checked
                    

                        imgsrc = imgsrc.replace("C:\\fakepath\\","/images/eventos/")

                      
                // convert o valor para um inteiro e ajusta à correta posição no array
                let posicao =parseInt(row.rowIndex)-2
                // chama a funçao edit

                Project.change(studentName, date, edition, text,imgsrc,status,posicao)
                alert("Projecto editado com sucesso!")
                //carrega novamente a tabela
                tableEvents()
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

        if(confirm("Are you sure you want delete this event?")) {

            Event.remove(cellValue)
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
                //ALterar coluna 3 para fazer upload imagem
                newCells[4].innerHTML = `<input type="file" id="img" name="img" accept="image/* defaultImgSrc:../images/eventos">`


    }else{

        let name = newCells[0].querySelector('input').value;
        let date = newCells[1].querySelector('input').value
        let edition = newCells[2].querySelector('input').value
        let text = newCells[3].querySelector('input').value
        let imgsrc= newCells[4].querySelector('input').value
     
    

        imgsrc = imgsrc.replace("C:\\fakepath\\","/images/eventos/")

        Event.add(name,date,edition,text,imgsrc)
        alert("Evento adicionado com sucesso!")
        //carrega novamente a tabela
        tableEvents()
        //refresh à pagina 
        location.reload()


    }

})