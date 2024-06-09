import * as Project from "../models/ProjectsModel.js";

let projects=[]
Project.init()

function showVideo(){
let video=document.querySelector("#projectVideo")

projects=Project.getProjects()

//gerar um numero aleatorio
let id = Math.floor(Math.random()* (projects.length-1))

video.src=projects[id].url+"?autoplay=1&controls=0"
console.log(video.src)

}
showVideo()