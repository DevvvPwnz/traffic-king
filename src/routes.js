import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp";
import Login from './components/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ResetPassword from "./components/ResetPassword";
import Support from './components/SupportForm/index'
import { HOME_ROUTE, LOGIN_ROUTE,PROFILE_ROUTE,SIGNUP_ROUTE,
    RESET_ROUTE,DASHBOARD_ROUTE,STATISTIC_ROUTE,
    COMPAIGN_ROUTE,SUPPORT_ROUTE} from "./utils/consts";


export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component:Login
    },
    {
        path:HOME_ROUTE,
       
    },
    {
        path:SIGNUP_ROUTE,
        Component:SignUp
    },
    {
        path:RESET_ROUTE,
        Component:ResetPassword
    },
    {
        path:SUPPORT_ROUTE,
        Component:Support,
        props:true
    },
    
]

export const privateRoutes = [
    {
        path:PROFILE_ROUTE,
        Component:Profile
    },
    {
        path:HOME_ROUTE,
       
    },
    {
        path:DASHBOARD_ROUTE,
        Component:Dashboard
    },
    {
        path:STATISTIC_ROUTE,
        Component:Dashboard
    },
    {
        path:COMPAIGN_ROUTE,
        Component:Dashboard
    },
    {
        path:SUPPORT_ROUTE,
        Component:Support
    },
    
]