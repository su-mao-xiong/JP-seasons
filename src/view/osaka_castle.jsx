import React from "react"
import {Outlet} from "react-router"

function osaka_castle(){
    return (<>
        <h2>大阪城頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default osaka_castle