import React from 'react'

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Menu from '../../components/Menu/Menu'

export default function Home(){
    return(
        <div className="App">
        <Header></Header>
        <div className="appContent">
          <Menu></Menu>
          <Main></Main>
        </div>
  
        </div>
        

    )
}