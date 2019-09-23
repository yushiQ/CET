
import Allexam from '../pages/perspec/allexam/index';
import  Login from './pages/login';
import Headmaster from "./pages/headmaster"

export default [
    {
        path:'/login',
        component:Login
    },{
        path:'/allexam',
        component:Allexam
    },
    {
        path:'/headmaster',
        component:Headmaster
    },
    {
        path:'/',
        redirect:'/login'
    }
]


