import React from "react"
import {Outlet} from "react-router"

function signUp(){
    return (<>
        <h2>註冊頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default signUp