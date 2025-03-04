import React from "react";


import Header from "../layout/header";
import Home from "../pages/home"; //首頁
import About from "../pages/about"; //關於我們
import Member from "../pages/member"; //會員中心
import Search from "../pages/search"; //搜尋頁面
import View_disney from "../pages/view_disney"; //迪士尼頁面


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
                path: 'view_disney',
                element: <View_disney />
            }
        ]
    }
]

export default routes;