import "./CompiledCV.css";

import email from "./assets/email-outline.svg"
import phone from "./assets/phone-outline.svg"
import address from "./assets/map-marker.svg"

function CompiledCV() {
    return (
        <>
        <section className="compiledCV">
        <div className="personalDetails">
            <h2>name.Larry Bird</h2>
            <div className="addressPhoneMail">
                <div className="infoWithIcon">
                    <img src={email} alt="emailicon" />
                    <p>mail.larrybird@chirpmail.com</p>
                </div>
                <div className="infoWithIcon">
                    <img src={phone} alt="telephoneicon" />
                    <p>telephone.+34 123 456 789</p>
                </div>
                <div className="infoWithIcon">
                    <img src={address} alt="addressicon" />
                    <p>address.My Perch, My Cage</p>
                </div>
            </div>
        </div>

        <div className="section">
            <h3>sectionname.Education</h3>
            <div className="experienceElement">
                <div className="expLeftCol">
                    <p>startDate.??-??-2017 - endDate.30-07-2020</p>
                    <p>location.Cartagena, Murcia, ES</p>
                </div>
                <div className="expRightCol">
                    <h4>schoolName.Bird University</h4>
                    <b>courseName.Master in advanced chirping</b>
                </div>
            </div>
            <div className="experienceElement">
                <div className="expLeftCol">
                    <p>startDate.??-??-2017 - endDate.30-07-2020</p>
                    <p>location.Cartagena, Murcia, ES</p>
                </div>
                <div className="expRightCol">
                    <h4>schoolName.Bird University</h4>
                    <b>courseName.Master in advanced chirping</b>
                </div>
            </div>
        </div>

        <div className="section">
            <h3>sectionname.Professional Experience</h3>
            <div className="experienceElement">
                <div className="expLeftCol">
                    <p>startDate.??-??-2015 - endDate.10-02-2024</p>
                    <p>location.Cartagena, Murcia, ES</p>
                </div>
                <div className="expRightCol">
                    <h4>companyName.Mini cage</h4>
                    <b>role.Branch director</b>
                    <p>
                        description.Primary responsibilities included consuming an array of junk food treats—favorites being
                        sunflower seeds and sweet snacks—while offering a melodic soundtrack of chirps, whistles, everything
                        from the comfort of my favourite branch.
                    </p>
                </div>
            </div>

            <div className="experienceElement">
                <div className="expLeftCol">
                    <p>startDate.??-??-2015 - endDate.10-02-2024</p>
                    <p>location.Cartagena, Murcia, ES</p>
                </div>
                <div className="expRightCol">
                    <h4>companyName.Mini cage</h4>
                    <b>role.Branch director</b>
                    <p>
                        description.Primary responsibilities included consuming an array of junk food treats—favorites being
                        sunflower seeds and sweet snacks—while offering a melodic soundtrack of chirps, whistles, everything
                        from the comfort of my favourite branch.
                    </p>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default CompiledCV;