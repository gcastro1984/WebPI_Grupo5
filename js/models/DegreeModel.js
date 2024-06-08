let curricularUnits =[];


//carregar disciplinas da local storage

export function init(){
    

    if(localStorage.curricularUnits){

    const tempCurricularUnits = JSON.parse(localStorage.curricularUnits)
    for (let curricularUnit of tempCurricularUnits) {

        curricularUnits.push(new CurricularUnit(curricularUnit.name,curricularUnit.year,curricularUnit.semester,curricularUnit.desc))

        }
    } else{
        curricularUnits =[]
    }

    return curricularUnits

    }



//adicionar uc

export function addUc(name, year, semester,desc) {

    if(curricularUnits.some((curricular) => curricular.name === name)) {
        throw Error(` The Curricular Unit ${name} already exists`)

    }else {
        curricularUnits.push(new CurricularUnit(name, year, semester,desc));
        localStorage.setItem("curricularUnits", JSON.stringify(curricularUnits))

    }

    }


//Remover UC

export function removeUc(name) {

    curricularUnits = curricularUnits.filter((curricular) => curricular.name !== name)
    localStorage.setItem("curricularUnits", JSON.stringify(curricularUnits))

}

//Funcao para obter

//Classe que modela as unidades curriculares

class CurricularUnit{
    name = "";
    year="";
    semester="";
    desc="";


    constructor(name, year, semester,desc){
    this.name = name;
    this.year = year;
    this.semester=semester;
    this.desc = desc
    
    }
}