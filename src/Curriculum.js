import { v4 as uuidv4 } from 'uuid';
import * as dateFns from 'date-fns';

class Curriculum {

    constructor(fullname = "Larry Bird", 
                email = "larrybird@birdie.poop", 
                telephone = "855-568-3645", 
                address = "3rd Perch, Chirpy corner, My Cage 23847" , 
                education = [new Experience("Feathered Friends Academy",
                                            "Winged Communication Skills",
                                            dateFns.format(new Date("2016-03-03"), "MM/yyyy"),
                                            dateFns.format(new Date("2016-07-08"), "MM/yyyy"),
                                            "Featherburg"),
                            new Experience("Birdsong Institute",
                                            "Advanced Chirping Techniques",
                                            dateFns.format(new Date("2016-01-03"), "MM/yyyy"),
                                            dateFns.format(new Date("2019-02-22"), "MM/yyyy"),
                                            "Phoenix")], 
                experiences = [new Experience("Chirpy Enterprises",
                                            "Branch Manager",
                                            dateFns.format(new Date("2020-02-11"), "MM/yyyy"),
                                            dateFns.format(new Date(), "MM/yyyy"),
                                            "My Cage",
                                            `As the esteemed Branch Manager, I oversee the daily operations 
                                            from my designated perch, ensuring a steady supply of sunflower 
                                            seeds and occasional fruit treats. My role includes meticulous 
                                            supervision of seed consumption and maintaining optimal branch 
                                            stability for peak performance.`)]) {

        this.fullName = fullname;
        this.eMail = email;
        this.telephone = telephone;
        this.address = address;
        this.education = education;
        this.experiences = experiences;
    }

   
}


class Experience {

    constructor(name = "" ,
                role = "" ,
                startdate = dateFns.format(new Date(), "MM/yyyy") ,
                enddate = dateFns.format(new Date(), "MM/yyyy") ,
                location = "" ,
                description = "",
                id = uuidv4()
    ) {

        this.name = name;
        this.role = role;
        this.startdate = startdate;
        this.enddate = enddate;
        this.location = location;
        this.description = description;
        this.id = id;
    }
}



export {Curriculum, Experience};