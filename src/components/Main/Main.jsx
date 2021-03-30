import React, { useEffect } from 'react'
import * as Icon from 'react-feather'
import './Main.scss'
import negativo from '../../img/negativo.png'
import okay from '../../img/okay.png'
import api from '../../services/api'
import { useState } from 'react'
import * as auth from '../../services/auth'
import { Link } from 'react-router-dom'


export default function Main(){
    const [spend, setSpend] = useState(0)
    const user = localStorage.getItem(auth.NOME_USUARIO)
    const salary = localStorage.getItem(auth.salarioUsuario)
    const gastos = spend
    const liquid = salary - spend
    let atualPercent = Math.floor(spend * 100 / salary)
    if(atualPercent >= 100){
        atualPercent = 100
    }
    let percent = Math.floor(salary * 20 / 100)

    const id_user = localStorage.getItem(auth.id_Usuario)
    
    const getSpend = async () => {
        const data = await api.get(`/api/gastos/${id_user}`)
        if(data.data.length != 0){
            const dataValue = data.data.map(data => data.spend).reduce((next, total) => {
                return next + total
            })
            setSpend(dataValue)
        }else{
        
        }
        
        
    }
    getSpend()
       
    return(
    <div className="mainContainer">
            <div className="showInformation">
                <h1>Olá {user} esse é o seu faturamento mensal.</h1>
                <p>{liquid}€</p>
                <br/>
                { atualPercent >= 80 ? (<p>O My Finance! aconselha<br></br>você cortar gastos.</p>) : (<p>O My Finance te aconselha <br></br> investir 20% do seu salário em uma <br></br>poupança fixa.</p>)}
                <br/>
                <p>Você está gastando &nbsp; {atualPercent >= 80 ? (<> <strong style={{color:'red'}}>{atualPercent}%</strong>&nbsp; <img style={{maxWidth: '40px'}}src={negativo} alt=""></img>&nbsp;  </>):(<><strong style={{color:'#4CD62B'}}>{atualPercent}%</strong> <img style={{maxWidth: '40px'}}src={okay} alt=""></img>&nbsp;</>)} no momento</p>
                <br/>
                

                <div className="contentBar">
                    { atualPercent >= 80 ? (<div className="bar" style={{width:`${atualPercent}%`, background:'red'}}></div>) : (<div className="bar" style={{width:`${atualPercent}%`, background:'#4CD62B'}}></div>)}
                   
                </div>
                <br/>
                <button>
                    <Link to="/Spending">Atualize seus Gastos.</Link>
                </button>
            </div>
            
         <div className="systemIformation">

            <h1>{user} Essa é sua situação esse mês.</h1>
            <p>Seu Salario: {salary}€ <Icon.Check size={30}color="#4CD62B"></Icon.Check></p>

            <p>Seus Gastos: {gastos}€ {atualPercent >= 30 ? (<Icon.X color="red"/>):(<Icon.Check color="#4CD62B"/>)}</p>
            <br/>
            
            <p>Você Deve poupar todo mês no Minimo {percent}€</p> { liquid > percent  ? (<Icon.Check color="#4CD62B"/>) : (<Icon.X color="red"/>)}
            <br/>
            <span>{ atualPercent >= 80 ? (<strong style={{color:'red'}}>Você está gastando mais do que devia.</strong>):(<strong style={{color: '#4CD62B'}}>Você está Administrando bem o seu dinheiro, continue assim!</strong>)}</span>
            <br/>
            <button>
                <a href="#">Edite o Seu Salario.</a>
            </button>
            

           

            
        </div>

        <div className="buttonContainer"> 
            
        </div>
    </div>
    )
}