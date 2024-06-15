function eventsLength(){

    let events= JSON.parse(localStorage.events)
    return events.length

}

document.querySelector("#eventsLength").innerHTML=eventsLength()
document.querySelector("#eventsLength_2").innerHTML=eventsLength()

function projectsLength(){

    let projects= JSON.parse(localStorage.projects)
    return projects.length

}

document.querySelector("#projectsLength").innerHTML=projectsLength()
document.querySelector("#projectsLength_2").innerHTML=projectsLength()



function testimonialsLength(){

    let testimonials= JSON.parse(localStorage.testimonials)
    return testimonials.length

}

document.querySelector("#testimonialsLength").innerHTML=testimonialsLength()
document.querySelector("#testimonialsLength_2").innerHTML=testimonialsLength()


function usersLength(){

    let users= JSON.parse(localStorage.users)
    return users.length

}

document.querySelector("#usersLength").innerHTML=usersLength()
document.querySelector("#usersLength_2").innerHTML=usersLength()