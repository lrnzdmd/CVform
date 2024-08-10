import trash from "./assets/trash-can-outline.svg"
import edit from "./assets/file-edit-outline.svg"
import SidebarSectionElementForm from "./SidebarSectionElementForm";
import { useState } from "react";



function SidebarSectionElement(props) {

    const [isActive, setIsActive] = useState(false);

    function toggleEdit(e) {
        e && e.preventDefault();
        setIsActive(!isActive);
    }

    return (
        <div className="element">
                        <div className="cardHead">
                            <b>{props.data.name}</b>
                            <div className="editDeleteIcons">
                                <img src={edit} alt="editIcon" onClick={toggleEdit}/>
                                <img src={trash} alt="trashIcon" data-uuid={props.uuid} data-catname={props.catName} onClick={props.deleteArrayElement}/>
                            </div>
                        </div>
                        {isActive && <SidebarSectionElementForm id={props.uuid} toggleEdit={toggleEdit} data={props.data} catName={props.catName} updateArrayField={props.updateArrayField}></SidebarSectionElementForm>}
                    </div>
    )
}

export default SidebarSectionElement;