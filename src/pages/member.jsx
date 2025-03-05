
import React from "react"
import {Outlet} from "react-router"

function member(){
    return (<>
        <h2>會員中心頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default member