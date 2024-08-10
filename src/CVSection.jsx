function CVSection(props) {
    return (
        <div className="section">
            <h3>{props.sectionName}</h3>
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
    )
}

export default CVSection;