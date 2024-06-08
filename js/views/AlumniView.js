import * as Testimony from "../models/AlumniModel.js";



function catalogAlumni(){

Testimony.init()
rendercatalogAlumni(Testimony.getTestimonials())



}


function rendercatalogAlumni(testimonials=[]){
    let result=`<div class="testimonial">
    <h1 class="testimonal-title">TSIW Alumni Testimonials</h1>
    <h3 class="testimonial-text">Inspiring stories of TSIW alumni who have achieved high success.
      Read their testimonials and see how the TSIW degree can help you achieve your dreams.</h3>
    <br>
  </div>`
  
    for (const testimonial of testimonials){

      if (testimonial.active){
        result+=generateCardAlumni(testimonial)
      }
    }

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

