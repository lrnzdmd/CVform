
import SidebarSectionElement from "./SidebarSectionElement";

function SidebarSectionList({ catName, list, updateArrayField, deleteArrayElement, addArrayElement}) {
    return (
        <div className="listContainer">
            <div className="listElements">
                {list.map(element => (
                    <SidebarSectionElement key={element.id} uuid={element.id} data={element} catName={catName} id={element.id} updateArrayField={updateArrayField} deleteArrayElement={deleteArrayElement}></SidebarSectionElement>
                ))}
            </div>   
                <button data-catname={catName} onClick={addArrayElement}>+ {catName}</button>
            </div>
    )
}

export default SidebarSectionList;