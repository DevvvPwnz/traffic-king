import { Route,Switch,Redirect} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { privateRoutes,publicRoutes } from '../routes'
import { LOGIN_ROUTE } from "../utils/consts";


const AppRouter = ()=>{
     
    const { currentUser} =useAuth()

  
   
    
    return currentUser ?
    (
        <Switch>
            {privateRoutes.map(({path,Component})=>
              <Route path={path} component={Component} exact={true} key={path}/>
            )}
            <Redirect to="/dashboard"/>
        </Switch>
    )
    :
    (
        <Switch>
            {publicRoutes.map(({path,Component})=>

              <Route path={path} component={Component} exact={true}  key={path}/>  
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
}

export default AppRouter