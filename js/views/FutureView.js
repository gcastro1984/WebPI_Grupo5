import * as Project from "../models/ProjectsModel.js";
import * as Event from "../models/EventsModel.js"


let projects=[]

/*
//function showVideo(){
let video=document.querySelector("#projectVideo")

projects=Project.getProjects()

gerar um numero aleatorio
let id = Math.floor(Math.random()* (projects.length-1))

video.src=projects[id].url+"?autoplay=1&controls=0"
console.log(video.src)

}
showVideo()*/

function EventsCatalog(){

    Event.init()
    renderCatalogEvents(Event.getEvents())
    
}

function renderCatalogEvents(events){
    let result = `<div class="row">`
    for (const event of events) {
        if(event.active){
            result+=generateCardEvent(event)
        }
        
    }
    result+=`</div>`
    document.querySelector("#events").innerHTML=result

}

function generateCardEvent(event){
    let result=` <div class="column">
        <div class="card">
          <img src=${event.imgsrc} alt="${event.name}">
          <h1>${event.name}</h1>
          <p>${event.text}</p>
    
        </div>
      </div>
`
return result
}


EventsCatalog()

function ProjectsCatalog(){

    Project.init()
    renderCatalogProjects(Project.getProjects())
    
}

function renderCatalogProjects(projects){
    let result = `<div class="row">`
    for (const project of projects) {
        if(project.active){
            result+=generateCardProject(project)
        }
        
    }
    result+=`</div>`
    document.querySelector("#projects").innerHTML=result

}

function generateCardProject(project){
    let result=`<div class="column">
        <div class="card-project">
          <img src="${project.imgsrc}" alt="${project.name}">
          <h1>${project.name}</h1>
          <p>by ${project.studentName}</p>
          <span>with</span>
          <p><button>${project.partner}</button></p>
        </div>
      </div>
`
return result
}

ProjectsCatalog()