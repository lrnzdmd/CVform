import email from "./assets/email-outline.svg"
import phone from "./assets/phone-outline.svg"
import address from "./assets/map-marker.svg"


function CVHeader(props) {
    return(
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
    )
}

export default CVHeader;