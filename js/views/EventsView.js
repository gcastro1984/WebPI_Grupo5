import * as Event from "../models/EventsModel.js";
//Carrega testemunhos na tabela
function tableEvents(){

    Event.init()


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
            <input id="new" type="submit" value="New"  class="badge new"></
        </td>
    </tr>`

        let events=Event.getevents()

        //Injetar no card o numero de eventos
        //document.querySelector("#eventslenght").innerHTML=events.length

        for (const event of events){
            result+=generateLineTable(event)
        }
    
        //Adicionar linhas
        document.querySelector("#tableEvent").innerHTML=result
    
    }
    
    
    function generateLineTable(event) {
    
        let result=`<tr><td>${event.name}</td><td>${event.date}</td><td>${event.edition}</td><td>${event.text}</td><td><img src="${event.imgsrc}" class="img-4"</div></td><td><input type="submit" value="Edit"  class="badge edit"><input type="submit" value="Delete"  class="badge delete"><div class="status-check">
        <input type="checkbox" data-id="${event.active}" ${event.active ?"checked":"" } id="status" disabled><label for="status">Status</label>
    </div> </td></tr>`
    
      return result
    }  


    tableEvents()
    



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
                cells[4].innerHTML = `<input type="file" id="img" name="img" accept="image/* defaultImgSrc:../images/eventos/" required>`
                //satus deve estar ativo no modo ediçao
                row.querySelector("#status").disabled = false;

            }else{

                    //recolhe os dados editados na linha da tabela para serem guardados
            
                        let name = cells[0].querySelector('input').value;
                        let date = cells[1].querySelector('input').value
                        let edition = cells[2].querySelector('input').value

                        let text = cells[3].querySelector('input').value
                        let imgsrc= cells[4].querySelector('input').value
                        let status = cells[5].querySelector('#status').checked
                    

                        imgsrc = imgsrc.replace("C:\\fakepath\\","/images/eventos/")

                      
                // convert o valor para um inteiro e ajusta à correta posição no array
                let posicao =parseInt(row.rowIndex)-2
                // chama a funçao edit

                Event.change(name, date, edition, text,imgsrc,status,posicao)
                alert("Evento editado com sucesso!")
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
