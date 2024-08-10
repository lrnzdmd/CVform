

function SidebarSectionElementForm(props) {
    return (
        <form action="inputExperienceDetails">
                            <label>{props.catName === "Education" ? "School" : "Company Name"}</label>
                            <input data-uuid={props.id} data-catname={props.catName.toLowerCase()} type="text" name="name" onChange={props.updateArrayField} value={props.data.name} />
                            <label>{props.catName === "Education" ? "Course" : "Role"}</label>
                            <input data-uuid={props.id} data-catname={props.catName.toLowerCase()} type="text" name="role" value={props.data.role} onChange={props.updateArrayField}/>
                            <label>Date From</label>
                            <input data-uuid={props.id} data-catname={props.catName.toLowerCase()} type="date" name="startdate" onChange={props.updateArrayField}/>
                            <label>Date To</label>
                            <input data-uuid={props.id} data-catname={props.catName.toLowerCase()} type="date" name="enddate" onChange={props.updateArrayField}/>
                            <label>Location</label>
                            <input data-uuid={props.id} data-catname={props.catName.toLowerCase()} type="text" name="location" value={props.data.location} onChange={props.updateArrayField}/>
                            {props.data.description && <><label>Description</label><textarea data-uuid={props.id} data-catname={props.catName.toLowerCase()} name="description" value={props.data.description} onChange={props.updateArrayField}></textarea></>}

                            <button type="submit" onClick={props.toggleEdit}>Close</button>

                        </form>
    )
}

export default SidebarSectionElementForm;