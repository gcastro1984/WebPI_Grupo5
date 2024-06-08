let projects=[]

//carregar projetos

export function init(){
    

    if(localStorage.projects){

    const tempProjects= JSON.parse(localStorage.projects)
    for (let project of tempProjects) {

        projects.push(new Project(project.name, project.studentName,project.text,project.year,project.url,project.active=true))

        }
    } else{
        projects=[]
    }
    }



//adicionar Projecto

export function add(name, studentName,text,year,url,active=true) {

    if(projects.some((project) => project.name === name)) {
        throw Error(` The Project of ${name} already exists`)

    }else {
        projects.push(new Project(name, studentName,text,year,url,active=true));
        localStorage.setItem("projects", JSON.stringify(projects))

    }

    }

//Alterar Projecto

export function change(name, studentName,text,year,url,active=true,posicao) {
    //posicao do array

    projects[posicao].name = name
    projects[posicao].studentName = studentName  
    projects[posicao].text = text  
    
    projects[posicao].year = year 
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
    text="";
    year="";
    url="";
    active="";


    constructor(name, studentName,text,year,url,active=true){
    this.name = name;
    this.studentName = studentName ;
    this.text = text
    this.year=year
    this.url=url
    this.active=active
    
    }
}