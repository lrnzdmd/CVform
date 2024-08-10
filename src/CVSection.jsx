import CVElement from "./CVElement";

function CVSection(props) {
    return (
        <div className="section">
            <h3>{props.sectionName}</h3>
            {props.list.map(el => (
                <CVElement key={el.id} element={el} />
            ))}

            
        </div> 
    )
}

export default CVSection;