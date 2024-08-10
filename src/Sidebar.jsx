import DetailsForm from "./DetailsForm";
import "./Sidebar.css";
import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";



function Sidebar(props) {

    

    return (
        <>
        <nav className="sidebar">
        <SidebarHeader resetCV={props.resetCV} cv={props.cv}/>
        
        <DetailsForm updateField={props.updateField} cv={props.cv}/>

        <SidebarSection list={props.cv.education} updateField={props.updateField} updateArrayField={props.updateArrayField} deleteArrayElement={props.deleteArrayElement} addArrayElement={props.addArrayElement}>Education</SidebarSection> 

        <SidebarSection list={props.cv.experiences} updateField={props.updateField} updateArrayField={props.updateArrayField} deleteArrayElement={props.deleteArrayElement} addArrayElement={props.addArrayElement}>Experiences</SidebarSection>
    </nav>
        </>
    )
}

export default Sidebar;