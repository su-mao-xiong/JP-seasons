
import React from "react"
import {Outlet} from "react-router"

function adminManage(){
    return (<>
        <h2>後台管理者頁面(一般用戶)</h2>
        /*網頁程式碼請放這裡面 */
        <Outlet />
    </>)
}




export default adminManage