import React from "react";
import { Outlet } from 'react-router';

import Layout from "../layout/layout"; //網站的header 和 footer


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
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home /> 
            },
            {
                path: 'about',    //dev url: http://localhost:5173/#/about
                element: <About />  
            },
            {
                path: 'member',    //dev url: http://localhost:5173/#/member
                element: <Member />
            },
            {
                path: 'search',    //dev url: http://localhost:5173/#/search
                element: <Search />
            },
            {
                path: 'adminManage',    //dev url: http://localhost:5173/#/adminManage
                element: <AdminManage />
            },
            {
                path: 'userManage',    //dev url: http://localhost:5173/#/userManage
                element: <UserManage />
            },
            {
                path: 'signUp',    //dev url: http://localhost:5173/#/signUp
                element: <SignUp />
            },
            {
                path: 'logIn',    //dev url: http://localhost:5173/#/logIn
                element: <LogIn />
            },

            {
                path: 'disney',    //dev url: http://localhost:5173/#/disney
                element: <Disney />
            },
            {
                Path: 'osaka_castle',    //dev url: http://localhost:5173/#/osaka_castle
                element: <Osaka_castle />
            },
            {
                path: 'sumidagawaHanabi',    //dev url: http://localhost:5173/#/sumidagawaHanabi
                element: <SumidagawaHanabi />
            }
        ]
    }
]

export default routes;