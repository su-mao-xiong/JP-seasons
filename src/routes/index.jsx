import layout from "../Layout";
import home from "../pages/home"; //首頁
import about from "../pages/about"; //關於我們
import member from "../pages/member"; //會員中心
import search from "../pages/search"; //搜尋頁面
import view_disney from "../pages/view_disney"; //迪士尼頁面




const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <home />
            },
            {
                path: 'about',
                element: <about />
            }
        ]
    }
]