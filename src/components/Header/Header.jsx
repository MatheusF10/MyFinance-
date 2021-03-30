import React from 'react'
import * as Icon from 'react-feather'
import '../Header/Header.scss'
import { Link } from 'react-router-dom'


export default function Header(){
    function Logout(){
        localStorage.clear()
        window.location.href = '/'
    }
    return(
        <header className='headerContainer'>
            <div className="logo">
                <h1><Link to="/Home">My Finance!</Link></h1>
            </div>
            
            <ul className='menuItens'>
                <li><Link to="/Home">Ínicio &nbsp;&nbsp;<Icon.Home color="white" size={18}> </Icon.Home></Link></li>
                <li><Link to="/Spending">Meus Gastos&nbsp;&nbsp;<Icon.Activity color="white" size={18}></Icon.Activity></Link></li>
                <li><Link to="/Economy">Economias&nbsp;&nbsp;<Icon.CreditCard color="white" size={18}></Icon.CreditCard></Link></li>
            </ul>
            <div className="buttonContent">
            <button onClick={Logout} type="button">
                <Link to="/">Logout<br></br>Usuário</Link>
                &nbsp;
                <Icon.LogOut color="white" size={15}></Icon.LogOut>
            </button>
            </div>
            
        </header>
    )
}