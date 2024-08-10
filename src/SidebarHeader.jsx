function SidebarHeader(props) {



    return (
        <div className="resetPrint">
            <button style={{ backgroundColor: '#c7c7c7' }} onClick={props.resetCV}>Reset</button>
            <button style={{ backgroundColor: '#f5f5f5' }}>Save</button>
        </div>
    )
}

export default SidebarHeader;