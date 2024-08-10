import "./CompiledCV.css";

import email from "./assets/email-outline.svg"
import phone from "./assets/phone-outline.svg"
import address from "./assets/map-marker.svg"

import CVSection from "./CVSection.jsx";

function CompiledCV(props) {
    return (
        <>
        <section className="compiledCV">
        <div className="personalDetails">
            <h2>{props.cv.fullName}</h2>
            <div className="addressPhoneMail">
                <div className="infoWithIcon">
                    <img src={email} alt="emailicon" />
                    <p>{props.cv.eMail}</p>
                </div>
                <div className="infoWithIcon">
                    <img src={phone} alt="telephoneicon" />
                    <p>{props.cv.telephone}</p>
                </div>
                <div className="infoWithIcon">
                    <img src={address} alt="addressicon" />
                    <p>{props.cv.address}</p>
                </div>
            </div>
        </div>

        <CVSection sectionName="Education" />

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