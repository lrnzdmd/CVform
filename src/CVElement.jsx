import * as dateFns from 'date-fns';

function CVElement(props) {
    return (
    <div className="experienceElement">
        <div className="expLeftCol">
            <p>{dateFns.format(props.element.startDate, "MM/yyyy")} - {dateFns.format(props.element.endDate, "MM/yyyy")}</p>
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