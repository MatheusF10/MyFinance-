import React from 'react'
import './Menu.scss'
import * as Icon from 'react-feather'
import api from '../../services/api'
import { useState } from 'react/cjs/react.development'
import * as auth from '../../services/auth'
import {Link} from 'react-router-dom'


export default function Menu() {
    const user = localStorage.getItem(auth.NOME_USUARIO)

    
   
    return (
        <>
        <div className="menuOverflow">
        <p>Olá, {user}!</p>
        </div>
        </>
    )

}