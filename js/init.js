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
            text:"My time at ESMAD and the Degree in Information Technologies and Systems for the Web gave me entry into the job market and into the world of developing educational games, in which I currently spend my professional life.",
            imgsrc:"/images/testimonials/Raquel Silva.jpg",
            active: true,

        },

        {
        name:"Nuno Sousa",
        job:"Carbmee Governo Britânico ESMAD",
        text:"I can't help but mention that until I started at ESMAD I didn't know anything about programming and design, so, in addition to my effort, the excellent support from the teachers and their experience both at a teaching and professional level was undoubtedly the driving force behind this. all. I couldn't be more grateful to all my teachers, colleagues, and ESMAD.",
        imgsrc:"/images/testimonials/Nuno Sousa.jpg",
        active: true,

        },

        {
          name:"Diogo Fernandes",
          job:"Product Designer | Blip | Betfair | Paddy Power | Pokerstars | Fanduel | Sky Bet",
          text:"TTSIW gave me all the resources I needed to get to know the area completely. I initially started with the aim of pursuing a career in front-end programming, but thanks to the wide range of options that the course offers, I discovered everything that went on beyond the code. With this, I discovered the world of User Experience and never looked back. To date, I am still at Blip, as a Product Designer, and extremely happy with my current position. I will never forget what I learned from TSIW, my colleagues, teachers and ESMAD.",
          imgsrc:"/images/testimonials/Diogo Fernandes.jpg",
          active: true,
  
          },
          {
            name:"Joana Crasto",
            job:"Social Media | KuantoKusta",
            text:"I went ahead with the application in Technologies and Information Systems for the Web, without knowing exactly what I was going to learn. When I realized it was programming, I was in shock. Still I didn't give up! While I was still in my second year, I had the opportunity to apply my learning to a startup, IOTECH, where I discovered another passion: creating content for social media.",
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
        imgsrc:"/images/projectos/Beatriz_Lopes.jpg",
        url:"https://www.youtube.com/embed/hOpRyUDhx1k?si=wtncz6fv32_CAymV",
        active:true,
    

      },

            

      {
        name:"Plataforma Web",  
        studentName : "Gonçalo Gama",
        partner:"Riopele",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Gonçalo_Gama.jpg",
        url:"https://www.youtube.com/embed/Zit1YOjSaok?si=fsMDnYbVNO3qh1yg",
        active:true,
    

      },
      {
        name:"Media Asset Management",  
        studentName : "Luís Gomes",
        partner:"MOG",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Luis_Gomes.jpg",
        url:"https://www.youtube.com/embed/opE_ThSVI2g?si=JJ-FCHgvQoUEIKIs",
        active:true,
    

      },
      {
        name:"Quality Assurance Testing",  
        studentName : "Marco Malta",
        partner:"NONIUS",
        text:"",
        year:"2023",
        imgsrc:"/images/projectos/Marco_Malta.jpg",
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