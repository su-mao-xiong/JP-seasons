import React from "react"
import {Outlet} from "react-router"

function header() {
    return (<>
        <h1>header</h1>
        
        <Outlet />
    </>)
}



export default header