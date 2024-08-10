class Curriculum {

    constructor(fullname = "Larry Bird", 
                email = "larrybird@birdie.poop", 
                telephone = "855-568-3645", 
                address = "3rd Perch, Chirpy corner, My Cage 23847" , 
                education = [new Experience("Feathered Friends Academy",
                                            "Winged Communication Skills",
                                            new Date("2016-03-03"),
                                            new Date("2016-07-08"),
                                            "Featherburg"),
                            new Experience("Birdsong Institute",
                                            "Advanced Chirping Techniques",
                                            new Date("2016-01-03"),
                                            new Date("2019-09-22"),
                                            "Phoenix")], 
                experiences = [new Experience("Chirpy Enterprises",
                                            "Branch Manager",
                                            new Date("2020-02-11"),
                                            new Date(),
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
                startdate = new Date() ,
                enddate = new Date() ,
                location = "" ,
                description = ""
    ) {

        this.name = name;
        this.role = role;
        this.startDate = startdate;
        this.endDate = enddate;
        this.location = location;
        this.description = description;
    }
}



export default Curriculum;