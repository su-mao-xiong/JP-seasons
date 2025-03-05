import React from "react"
import {Outlet} from "react-router"

function disney() {
    return (<>
        <h1>迪士尼頁面</h1>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}



export default disney