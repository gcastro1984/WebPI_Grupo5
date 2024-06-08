let events=[]

//carregar eventos

export function init(){
    

    if(localStorage.events){

    const tempEvents= JSON.parse(localStorage.events)
    for (let event of tempEvents) {

        events.push(new Event(event.name, event.date, event.imgsrc,event.text,event.edition,event.active))

        }
    } else{
        events=[]
    }
    }



//adicionar Evento

export function add(name, date,imgsrc, text,edition,active=true) {

    if(events.some((event) => event.name === name)) {
        throw Error(` The Event of ${name} already exists`)

    }else {
        events.push(new Event(name, date, imgsrc,text,edition,active=true));
        localStorage.setItem("events", JSON.stringify(events))

    }

    }

//Alterar Evento

export function change(name, date,edition, text,imgsrc,active=true,posicao) {
    //posicao do array

    events[posicao].name = name
    events[posicao].date = date  
    events[posicao].edition = edition  
    
    events[posicao].text = text 
    events[posicao].imgsrc = imgsrc
    events[posicao].active = active


    localStorage.setItem("events", JSON.stringify(events))
    




}

// Remover Evento

export function remove(name) {
    //cria um novo array filtrando os que são diferentes do nome atraves da função   (event) => event.name !== name
    events=events.filter((event)=>event.name != name);


    //guarda na localSotrage esse novo array
    localStorage.setItem("events", JSON.stringify(events))


}



//Obter todos os eventos

export function getevents(){

    return events

}


//Classe que modela os Eventos

class Event{
    name = "";
    date=""
    imgsrc="";
    text="";
    edition="";
    active="";


    constructor(name, date, imgsrc,text,edition,active=true){
    this.name = name;
    this.date = date;
    this.imgsrc=imgsrc;
    this.text = text
    this.edition=edition
    this.active=active
    
    }
}