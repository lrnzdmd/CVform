import CVElement from "./CVElement";

function CVSection({ children, list}) {
    return (
        <div className="section">
            <h3>{children}</h3>
            {list.map(el => (
                <CVElement key={el.id} element={el} />
            ))}

            
        </div> 
    )
}

export default CVSection;