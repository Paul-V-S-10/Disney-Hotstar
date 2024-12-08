import {createBrowserRouter} from 'react-router-dom'
import MainUser from './User/MainUser/MainUser'
import Home from './User/Pages/Home/Home'
import Categories from './User/Pages/Categories/Categories'
import Movies from './User/Pages/Movies/Movies'
import MySpace from './User/Pages/MySpace/MySpace'
import Search from './User/Pages/Search/Search'
import Sports from './User/Pages/Sports/Sports'
import TV from './User/Pages/TV/TV'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainUser/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/categories',
                element:<Categories/>
            },
            {
                path:'/movies',
                element:<Movies/>
            },
            {
                path:'/myspace',
                element:<MySpace/>
            },
            {
                path:'/search',
                element:<Search/>
            },
            {
                path:'/sports',
                element:<Sports/>
            },
            {
                path:'/tv',
                element:<TV/>
            }
        ]
    }
])