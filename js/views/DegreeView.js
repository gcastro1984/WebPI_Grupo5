import * as CurricularUnit from "../models/DegreeModel.js";

renderDegree()

function renderDegree() {
  let curricularUnits = CurricularUnit.init() 
  

let first1=`<h5 class="card-title">Year 1 TSIW</h5><br><span>First Semester</span>`
let first2=`<br><span>Second Semester</span>`

  for (const curricular of curricularUnits) {
    if (curricular.year==="1"){
      if(curricular.semester==="1"){
        first1+=`<p class="card-text">${curricular.name}</p>`
      }else{ first2+=`<p class="card-text">${curricular.name}</p>`
    }
    }
  //Atribuir todas as UCS 1ºano ao Card
  // Atribuição de todos os cards gerados ao elemento
  document.querySelector("#firstyear").innerHTML = first1+first2;

  

  
  
  }
}
