
import React from "react"
import {Outlet} from "react-router"

function home(){
    return (<>
        <h2>Home頁面</h2>
        <Outlet />
    </>)
}




export default home