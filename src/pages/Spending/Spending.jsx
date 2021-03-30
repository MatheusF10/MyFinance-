import React from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import SpendingComponent from '../../components/Spending/Spending'


export default function SpendingPage(){
    return(
     
        <div className="App">
        <Header></Header>
        <div className="appContent">
          <Menu></Menu>
          <SpendingComponent></SpendingComponent>
        </div>
        
        </div>
       
    )
}