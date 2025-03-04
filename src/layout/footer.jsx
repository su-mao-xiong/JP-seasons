import React from "react"
import {Outlet} from "react-router"

function footer() {
    return (<>
        <h1>footer</h1>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}



export default footer