function DetailsForm(props) {
    return (
        <div className="personalDetailsInput">
            <h2>Personal Details</h2>
            <form action="inputPersonalDetails">
                <label>Full Name</label>
                <input type="text" name="fullName" onChange={props.updateField} value={props.cv.fullName} />
                <label>Email</label>
                <input type="email" name="eMail" onChange={props.updateField} value={props.cv.eMail}/>
                <label>Telephone</label>
                <input type="tel" name="telephone" onChange={props.updateField} value={props.cv.telephone} />
                <label>Address</label>
                <input type="text" name="address" onChange={props.updateField} value={props.cv.address} />
            </form>
        </div>
    )
}

export default DetailsForm;