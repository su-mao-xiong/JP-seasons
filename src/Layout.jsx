// 網站中共用的內容，如：header、footer
//測試用頁面
import React from "react"
import {Outlet} from "react-router-dom"

function Layout() {
    return (<>
        <h1>hello world</h1>
        123
        <Outlet />
    </>)
}



export default Layout