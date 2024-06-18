import * as CurricularUnit from "./models/DegreeModel.js";
import * as User from "./models/UserModel.js";
import * as Testimony from "./models/AlumniModel.js"
import * as Event from "./models/EventsModel.js"
import * as Project from "./models/ProjectsModel.js"




function initdata() {
    //UCs
    if(!localStorage.curricularUnits){
        const curricularUnits =[
            {
            name: "Algorithm and Data Structures",
            year:"1",
            semester:"1",
            desc:"Python",
            },
            {
              name: "Mathematics I",
              year:"1",
              semester:"1",
              desc:"Introduction to Logic and Set Theory",
            },

            {
              name: "Design Fundamentals",
              year:"1",
              semester:"1",
              desc:"Ability to identify and analyze the elements present in graphic and webdesign projects and to apply them to new projects, analyses of the base components in each project"
            },

            {
              name: "Computer Systems I",
              year:"1",
              semester:"1",
              desc:"Embeded systems",
            },

            {
              name: "Web Technologies",
              year:"1",
              semester:"1",
              desc:"World Wide Web",
            },

            {
              name: "Multimedia Design and Production",
              year:"1",
              semester:"2",
              desc:"Identifying needs by identifying the specification of a multimedia product."
            },

            {
              name: "Interfaces and Design for Applications",
              year:"1",
              semester:"2",
              desc:"Design an illustration, from the concept to the final product, through grap experimentation processes"
            },
            
            {
              name: "Mathematics II",
              year:"1",
              semester:"2",
              desc:"Linear Algebra"
            },
            {
              name: "Project I",
              year:"1",
              semester:"2",
              desc:"Planning of software projects"
            },

            {
              name: "Object Oriented Programming",
              year:"1",
              semester:"2",
              desc:"Javascript"
            },
            
            //2º Ano
      
            {
                name: "Artificial intelligence",
                year:"2",
                semester:"2",
                desc:"AI",
                },

                {
                  name: "Data Base",
                  year:"2",
                  semester:"1",
                  desc:"Fundamentals of Databases",
                  },

                  {
                    name: "Computer Graphics Base",
                    year:"2",
                    semester:"1",
                    desc:"Understand the growing importance of animation and computer graphics in the most varied domains of human activity",
                  },

                  {
                    name: "Software Engineering",
                    year:"2",
                    semester:"1",
                    desc:"Describe the principles, concepts and practices of software engineering, and professional ethics for the development of quality software",
                  },

                  {
                    name: "Software Engineering",
                    year:"2",
                    semester:"1",
                    desc:"Describe the principles, concepts and practices of software engineering, and professional ethics for the development of quality software",
                  },
                  {
                    name: "Cognitive Ergonomics and Interaction Design",
                    year:"2",
                    semester:"1",
                    desc:"Understand the cognitive processes and their mechanisms",
                  },

                  {
                    name: "Web Programming I",
                    year:"2",
                    semester:"1",
                    desc:"Know the main protocols, standards, languages, frameworks, and tools used in Web programming ",
                  },

                  {
                    name: "Web Programming II",
                    year:"2",
                    semester:"2",
                    desc:"Understand the architecture and operation of the MVC ",
                  },
                  {
                    name: "Web Testing and Performance",
                    year:"2",
                    semester:"2",
                    desc:"Tests and Web Performance Class aims to give students the necessary skills to improve the performance of web applications ",
                  },

                  {
                    name: "Project II",
                    year:"2",
                    semester:"2",
                    desc:"Leverage the content covered in the various units involved in the project to a broad and integrated view of the web development process",
                  },
                  
            //3º Ano             

                {
                    name: "Digital marketing",
                    year:"3",
                    semester:"2",
                    desc:"Marketing",
                    },
            
        ];

        curricularUnits.forEach((curricular)=>{
            CurricularUnit.addUc(curricular.name,
                curricular.year,
                curricular.semester,
                curricular.desc
             );
             

        });
    
    }else{}





// USERS
if (!localStorage.users) {
    const users = [
      {
        username: "user1",
        password: "pass1",
        name: "Gerson",
        email:"user1@example.com",
        phone:"914497241",
        type:"admin",
        score:20,
        active: true,
        avatar:"/images/avatar/avatar.png"
      },
      {
        username: "user2",
        password: "pass2",
        name: "Paulo",
        email:"user2@example.com",
        phone:"914497241",
        type:"admin",
        score:30,
        active:true,
        avatar:"/images/avatar/ninja.png"
      },
    ];
    users.forEach((user) => {
      User.add(user.username, user.password, user.name, user.email, user.phone, user.type, user.score,user.active,user.avatar);
    });
  }

  //Testemunhos

  if(!localStorage.testimonials){
    const testimonials = [
        
        {
            name:"Raquel Silva",
            job: "Kendir Studios",
            text:"A passagem pela ESMAD e pela Licenciatura em Tecnologias e Sistemas de Informação para a Web proporcionou-me o ingresso no mercado de trabalho e neste mundo do desenvolvimento dos jogos educativos, na qual realizo atualmente a minha vida profissional",
            imgsrc:"/images/testimonials/Raquel Silva.jpg",
            active: true,

        },

        {
        name:"Nuno Sousa",
        job:"Carbmee Governo Britânico ESMAD",
        text:"Não posso deixar de referir que até ao entrar na ESMAD não sabia nada de programação e design, pelo que, além do meu esforço, o excelente acompanhamento dos professores e a sua experiência tanto a nível do ensino como também profissional foi sem dúvida o impulsionador disto tudo. Não poderia estar mais grato a todos os professores, colegas, e à ESMAD.",
        imgsrc:"/images/testimonials/Nuno Sousa.jpg",
        active: true,

        },

        {
          name:"Diogo Fernandes",
          job:"Product Designer | Blip | Betfair | Paddy Power | Pokerstars | Fanduel | Sky Bet",
          text:"TSIW deu-me todos os recursos necessários para conhecer a área por completo. Comecei inicialmente com o objetivo de seguir uma carreira em programação front-end, mas graças à vasta oferta que o curso nos dá, descobri tudo o que se passava para além do código. Com isto, descobri então o mundo de User Experience e nunca mais olhei para trás. Até ao momento, continuo na Blip, como Product Designer, e extremamente feliz com a minha posição atual. Nunca me esqueço do que aprendi com TSIW, os meus colegas, professores e a ESMAD!",
          imgsrc:"/images/testimonials/Diogo Fernandes.jpg",
          active: true,
  
          },
          {
            name:"Joana Crasto",
            job:"Social Media | KuantoKusta",
            text:"Avancei com a candidatura em Tecnologias e Sistemas de Informação para a Web, sem saber ao certo o que ia aprender. Quando percebi que era programação, fiquei em estado de choque. Ainda assim nãodesisti! Enquanto ainda estava no segundo ano, tive a oportunidade de aplicara minha aprendizagem numa startup, a IOTECH, onde descobri outra paixão: a criação de conteúdos para redes sociais.",
            imgsrc:"/images/testimonials/Joana Crasto.jpg",
            active: true,
    
            },

        ];

           

    testimonials.forEach((testimony)=>{
        Testimony.add(testimony.name,testimony.job, testimony.text,testimony.imgsrc,testimony.active);
    
        });



}

if(!localStorage.events){
  const events = [
      
      {
        name : "Plug-in",
        date:"10/20-07-2019",
        edition:"4ªEdiçao",
        text:"Plug-in is an annual event, organized by ESMAD, which brings together the ESMAD community with potential business partners, in order to promote opportunities for curricular internships.",
        imgsrc:"/images/eventos/plug_in.jpg",
        active:true,
    

      },

            
      {
        name:"CSII - Sistemas Interativos e Intel",
        date:"18-05-2018",
        edition:"2ªEdiçao",
        text:"The 2nd edition covered topics such as Digital Media, Artificial Intelligence and New Web Trends. CSII is jointly organized by the Degrees in TSIW and Multimedia.",
        imgsrc:"/images/eventos/csii.2th.jpg",
        active:true,
    

      },
      {
        name : "TSIW endpoints",
        date:"26-10-2022",
        edition:"7ªEdiçao",
        text:"TSIW Endpoints is an initiative that aims to bring graduates from the Degree in Information Technologies and Systems for the Web back to ESMAD, providing a space for sharing their experiences and their professional path.",
        imgsrc:"/images/eventos/eventos5.jpg",
        active:true,
    

      },
      {
        name : "GamifyIt",
        date:"07-12-2018",
        edition:"7ªEdiçao",
        text:"GamifyIt aims to present the Erasmus+ FGPE project and promotes good gamification practices through two app competitions",
        imgsrc:"/images/eventos/gamify.jpg",
        active:true,
    

      },
      
    
    
    ]

    events.forEach((event)=>{
      Event.add(event.name, event.date, event.edition,event.text,event.imgsrc,event.active);
  
      });

}
if(!localStorage.projects){
  const projects = [

      {
        name:"Design Tokens",  
        studentName : "Beatriz Lopes",
        partner:"BindTunning",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Beatriz Lopes.jpg",
        url:"https://www.youtube.com/embed/hOpRyUDhx1k?si=wtncz6fv32_CAymV",
        active:true,
    

      },

            

      {
        name:"Plataforma Web",  
        studentName : "Gonçalo Gama",
        partner:"Riopele",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Gonçalo Gama.jpg",
        url:"https://www.youtube.com/embed/Zit1YOjSaok?si=fsMDnYbVNO3qh1yg",
        active:true,
    

      },
      {
        name:"Media Asset Management",  
        studentName : "Luís Gomes",
        partner:"MOG",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Luis Gomes.jpg",
        url:"https://www.youtube.com/embed/opE_ThSVI2g?si=JJ-FCHgvQoUEIKIs",
        active:true,
    

      },
      {
        name:"Quality Assurance Testing",  
        studentName : "Marco Malta",
        partner:"NONIUS",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Marco Malta.jpg",
        url:"https://www.youtube.com/embed/BC5W3daFLGU?si=ho6dsmOKofym2csp",
        active:true,
    

      },
      



    
    ]

    projects.forEach((project)=>{
      Project.add(project.name, project.studentName,project.partner,project.text,project.year,project.imgsrc,project.url,project.active=true);
  
      });
    }
}

initdata();