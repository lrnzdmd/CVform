import school from "./assets/school-outline.svg"
import briefcase from "./assets/briefcase-outline.svg"
import down from "./assets/menu-down-outline.svg"
import { useState } from "react"

import SidebarSectionList from "./SidebarSectionList";


function SidebarSection({ children, list, updateArrayField, deleteArrayElement, addArrayElement }) {
    
    const [isActive, setIsActive] = useState(false);

    function toggleDropdown() {
        setIsActive(!isActive);
    }
    
    return (
        <div className="listOpen">
            <div className="listHeader" onClick={toggleDropdown}>
                <div className="listTitle">
                    <img src={children === "Education" ? school : briefcase} alt={children === "Education" ? "educationIcon" : "briefcaseIcon"} />
                    <h2>{children}</h2>
                </div>
                <img src={down} alt="downicon" />
            </div>
            {isActive && <SidebarSectionList list={list} catName={children} updateArrayField={updateArrayField} deleteArrayElement={deleteArrayElement} addArrayElement={addArrayElement}></SidebarSectionList>}
            
        </div>
    )
}

export default SidebarSection;