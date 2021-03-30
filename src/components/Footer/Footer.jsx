import React from 'react'
import './Footer.scss'

export default function Footer(){
    const date = new Date
    const year = date.getFullYear()
    return(
        <footer>
            <div>
                <h1>MyFinance!</h1>
                <h3>Criado por Matheus Ferraz | <p>{year}</p></h3>
            </div>
        </footer>
    )
}