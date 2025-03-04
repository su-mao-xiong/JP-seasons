import React from "react"
import {Outlet} from "react-router"

function logIn(){
    return (<>
        <h2>登入頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default logIn