
import React from "react"
import {Outlet} from "react-router"

function search(){
    return (<>
        <h2>搜尋頁面</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}



export default search