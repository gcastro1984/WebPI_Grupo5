import * as Testimony from "../models/AlumniModel.js";
import { isLogged} from "../models/UserModel.js";



function catalogAlumni(){

Testimony.init()
rendercatalogAlumni(Testimony.getTestimonials())



}


function rendercatalogAlumni(testimonials=[]){
    let result=""
  
    for (const testimonial of testimonials){

      if (testimonial.active){
        result+=generateCardAlumni(testimonial)
      }
    }
    result+=`</div>`
    //Adicionar cardas na pagina
    document.querySelector("#alumni").innerHTML=result
}


function generateCardAlumni(testimonial) {

    let result=` <div class="container">
    <img src="${testimonial.imgsrc}" alt="Avatar" style="width:90px">
    <p><span>${testimonial.name}</span><br> ${testimonial.job}</p>
    <p class="testimonial-text">“${testimonial.text}”
      </p>
  </div>`

  return result
}



catalogAlumni()

let ativity= document.querySelector("#memory")
ativity.addEventListener("click", () => {
  if(isLogged()){

    window.open(
      '/Memory Game/memory.html',
      '_blank') 
      

  }else{
    alert("Login first!")}
  
})



  

  

