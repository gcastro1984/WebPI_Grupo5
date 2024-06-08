let testimonials=[]

//carregar testemuhos

export function init(){
    

    if(localStorage.testimonials){

    const tempTestimonials = JSON.parse(localStorage.testimonials)
    for (let testimony of tempTestimonials) {

        testimonials.push(new Testimony(testimony.name,testimony.job,testimony.text,testimony.imgsrc,testimony.active))

        }
    } else{
        testimonials=[]
    }
    }



//adicionar Testemunho

export function add(name, job, text, imgsrc,active=true) {

    if(testimonials.some((testimony) => testimony.name === name)) {
        throw Error(` The Testimony of ${name} already exists`)

    }else {
        testimonials.push(new Testimony(name, job, text,imgsrc,active));
        localStorage.setItem("testimonials", JSON.stringify(testimonials))

    }

    }

//Alterar Testemunho

export function change(name,job,text,imgsrc,active,posicao) {
    //posicao do array

    testimonials[posicao].name = name
    testimonials[posicao].job = job  
    testimonials[posicao].text = text
    testimonials[posicao].imgsrc = imgsrc
    testimonials[posicao].active = active


    localStorage.setItem("testimonials", JSON.stringify(testimonials))
    




}

// Remover Testemunho

export function remove(name) {
    //cria um novo array filtrando os que são diferentes do nome atraves da função   (testemony) => testemony.name !== name
    testimonials=testimonials.filter((testemony)=>testemony.name != name);
    console.log(testimonials)

    //guarda na localSotrage esse novo array
    localStorage.setItem("testimonials", JSON.stringify(testimonials))


}



//Obter todos os testemuhos

export function getTestimonials(){

    return testimonials

}



//Classe que modela os Testemunhos

class Testimony{

    name="";
    job="";
    text="";
    imgsrc="";
    active = "";

    constructor(name,job,text,imgsrc, active=true){
    this.name = name;
    this.job = job;
    this.text=text;
    this.imgsrc = imgsrc;
    this.active = active;
    
    }
}