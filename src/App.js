import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TopSection from "./components/TopSection/TopSection";
import About from "./components/About/About";
import Support from "./components/Support/index.jsx";
import Footer from "./components/Footer/index.jsx";


import  {AuthProvider } from './contexts/AuthContext'
import AppRouter from './components/AppRouter'



function App() {
  return (
   
         <Router>
       <div className="wrapper" >

        <Switch>
        <AuthProvider>

          <Route exact={true} path="/">
            
            <TopSection/>
            <About/>
            <Support/>
            <Footer/>
          
           
          </Route>
          
          <AppRouter/>
  
        </AuthProvider>
        </Switch>
    
        </div>
    </Router>
   
  );
}

export default App;
