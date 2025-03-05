
import React from "react"
import {Outlet} from "react-router"

function home(){
    return (<>
        <h2>網站首頁</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default home