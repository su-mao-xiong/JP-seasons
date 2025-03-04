import React from "react"
import {Outlet} from "react-router"

function header() {
    return (<>
        <h1>header</h1>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}



export default header