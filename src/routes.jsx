import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cadaster from './pages/Cadaster/Cadaster'
import EconomyPage from './pages/Economy/Economy'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SpendingPage from './pages/Spending/Spending'

export default props => 
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Cadaster' component={Cadaster}/>
        <Route exact path='/Spending' component={SpendingPage}/>
        <Route exact path='/Economy' component={EconomyPage}/>
    </Switch>
    </BrowserRouter>

       

        
