import "./Sidebar.css";
import SidebarHeader from "./SidebarHeader";

import briefcase from "./assets/briefcase-outline.svg"
import edit from "./assets/file-edit-outline.svg"
import down from "./assets/menu-down-outline.svg"
import school from "./assets/school-outline.svg"
import trash from "./assets/trash-can-outline.svg"

function Sidebar(props) {

    return (
        <>
        <nav className="sidebar">
        <SidebarHeader resetCV={props.resetCV}/>

        <div className="personalDetailsInput">
            <h2>Personal Details</h2>
            <form action="inputPersonalDetails" method="get">
                <label>Full Name</label>
                <input type="text" name="Full Name" />
                <label>Email</label>
                <input type="email" name="Email" />
                <label>Telephone</label>
                <input type="tel" name="Telephone" />
                <label>Address</label>
                <input type="text" name="Address" />
            </form>
        </div>

        <div className="listOpen">
            <div className="listHeader">
                <div className="listTitle">
                    <img src={school} alt="educationicon" />
                    <h2>name.Education</h2>
                </div>
                <img src={down} alt="downicon" />
            </div>
            <div className="listContainer">
                <div className="listElements">
                    <div className="element">
                        <div className="cardHead">
                            <b>schoolName.Bird University</b>
                            <div className="editDeleteIcons">
                                <img src={edit} alt="editIcon" />
                                <img src={trash} alt="trashIcon" />
                            </div>
                        </div>
                        <form action="inputPersonalDetails">
                            <label>School</label>
                            <input type="text" name="School" />
                            <label>Course</label>
                            <input type="text" name="Course" />
                            <label>Date From</label>
                            <input type="date" name="Date From" />
                            <label>Date To</label>
                            <input type="date" name="Date To" />
                            <label>Location</label>
                            <input type="text" name="Location" />
                            <button type="submit">Close</button>
                        </form>
                    </div>

                    <div className="element">
                        <div className="cardHead">
                            <b>schoolName.Bird University</b>
                            <div className="editDeleteIcons">
                                <img src={edit} alt="editIcon" />
                                <img src={trash} alt="trashIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                <button>+ name.Education</button>
            </div>
        </div>

        <div className="listOpen">
            <div className="listHeader">
                <div className="listTitle">
                    <img src={briefcase} alt="educationicon" />
                    <h2>Experiences</h2>
                </div>
                <img src={down} alt="downicon" />
            </div>
        </div>
    </nav>
        </>
    )
}

export default Sidebar;