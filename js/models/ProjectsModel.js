let projects=[]

//carregar projetos

export function init(){
    

    if(localStorage.projects){

    const tempProjects= JSON.parse(localStorage.projects)
    for (let project of tempProjects) {

        projects.push(new Project(project.name, project.studentName,project.partner,project.text,project.year,project.imgsrc,project.url,project.active=true))

        } 
    } else{
        projects=[]
    }
    }



//adicionar Projecto

export function add(name,studentName,partner,text,year,imgsrc,url,active=true) {

    if(projects.some((project) => project.name === name)) {
        throw Error(` The Project of ${name} already exists`)

    }else {
        projects.push(new Project(name,studentName,partner,text,year,imgsrc,url,active=true));
        localStorage.setItem("projects", JSON.stringify(projects))

    }

    }

//Alterar Projecto

export function change(name,studentName, partner,text,year,imgsrc,url,active,posicao) {
    //posicao do array

    projects[posicao].name = name
    projects[posicao].studentName = studentName  
    projects[posicao].partner=partner
    projects[posicao].text = text  
    projects[posicao].year = year 
    projects[posicao].imgsrc=imgsrc
    projects[posicao].url = url
    projects[posicao].active = active


    localStorage.setItem("projects", JSON.stringify(projects))
    




}

// Remover Evento

export function remove(name) {
    //cria um novo array filtrando os que são diferentes do nome atraves da função   (event) => event.name !== name
    projects=projects.filter((project)=>project.name != name);


    //guarda na localSotrage esse novo array
    localStorage.setItem("projects", JSON.stringify(projects))


}



//Obter todos os eventos

export function getProjects(){

    return projects

}


//Classe que modela os Projectos


class Project{
    name = "";
    studentName=""
    partner=""
    text="";
    year="";
    imgsrc=""
    url="";
    active="";


    constructor(name,studentName,partner,text,year,imgsrc,url,active=true){
    this.name = name;
    this.studentName = studentName ;
    this.partner=partner
    this.text = text
    this.year=year
    this.imgsrc=imgsrc
    this.url=url
    this.active=active
    
    }
}