import React from "react"
import {Outlet} from "react-router"

function footer() {
    return (<>
        <h1>footer</h1>
        123
        <Outlet />
    </>)
}



export default footer