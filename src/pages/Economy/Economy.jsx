import React from 'react'
import EconomyComponent from '../../components/Economy/Economy'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'


export default function EconomyPage(){
    return(
        <div className="App">
        <Header></Header>
        <div className="appContent">
          <Menu></Menu>
          <EconomyComponent></EconomyComponent>
        </div>
        </div>
        

    )
}