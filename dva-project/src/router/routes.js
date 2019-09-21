import LoginIndex from '../pages/home/login/index';
import Allexam from '../pages/perspec/allexam/index';
import Charts from '../pages/visualdisplay/charts/index';
export default [
    {
        path:'/login',
        component:LoginIndex
    },{
        path:'/allexam',
        component:Allexam
    },
    {
        path:'/charts',
        component:Charts
    },
    {
        path:'/',
        redirect:'/login'
    }


]


