import * as dateFns from 'date-fns';

function CVElement(props) {
    return (
    <div className="experienceElement">
        <div className="expLeftCol">
            <p>{props.element.startdate} - {props.element.enddate}</p>
            <p>{props.element.location}</p>
        </div>
        <div className="expRightCol">
            <h4>{props.element.name}</h4>
            <b>{props.element.role}</b>
            {props.element.description && <p>{props.element.description}</p>}
        </div>
    </div>)
}

export default CVElement;