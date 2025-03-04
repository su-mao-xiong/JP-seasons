
import React from "react"
import {Outlet} from "react-router"

function about(){
    return (<>
        <h2>關於我們頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default about