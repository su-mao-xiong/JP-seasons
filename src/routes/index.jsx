import React from "react";


import Header from "../layout/header"; //網站的header
import Footer from "../layout/footer"; //網站的footer


import Home from "../pages/home"; //首頁
import About from "../pages/about"; //關於我們
import Member from "../pages/member"; //會員中心
import Search from "../pages/search"; //搜尋頁面
import AdminManage from "../pages/adminManage"; //後台(高階管理者)
import UserManage from "../pages/userManage"; //後台(一般用戶)
import SignUp from "../pages/signUp"; //註冊頁面
import LogIn from "../pages/logIn"; //登入頁面

import Disney from "../view/disney" //迪士尼頁面
import Osaka_castle from "../view/osaka_castle"; //大阪城頁面
import SumidagawaHanabi from "../view/sumidagawaHanabi"; //隅田川花火大會




const routes = [
    {
        path: '/',
        element: <Header/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'member',
                element: <Member />
            },
            {
                path: 'search',
                element: <Search />
            },
            {
                path: 'adminManage',
                element: <AdminManage />
            },
            {
                path: 'userManage',
                element: <UserManage />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'logIn',
                element: <LogIn />
            },

            {
                path: 'disney',
                element: <Disney />
            },
            {
                Path: 'osaka_castle',
                element: <Osaka_castle />
            },
            {
                path: 'sumidagawaHanabi',
                element: <SumidagawaHanabi />
            }
        ]
    }
]

export default routes;