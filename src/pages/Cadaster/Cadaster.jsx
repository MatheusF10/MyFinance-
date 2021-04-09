import React from 'react'
import * as Icon from 'react-feather'
import { useState } from 'react'
import './Cadaster.scss'
import api from '../../services/api'
import {Link} from 'react-router-dom'


export default function User(){
    const [user_name, setUser_Name] = useState('')
    const [salario, setSalario] = useState('')
    const [email,setEmail] = useState('')
    const [senha_usuario, setSenhaUsuario] = useState('')

    async function handleRegister(e){
        const data =  { user_name, salario, email, senha_usuario }
        const response = await api.post('/api/usuarios', data)
        if(response.status === 200){
            alert("Sua Conta Foi Criada")
            window.location.href = '/'
        }else{
            alert ("erro")
        }
        
    }
    return(
        <>
        <div className="cadasterContainer">
            
               <form className="submitForm" onSubmit={handleRegister}>
               <h1>MyFinance!</h1>
            
               <h1>Faça seu Cadastro!</h1>
                   <div className="content-1">
                        
                        <input placeholder="Nome de usuário" type="text" value={user_name} onChange={e => setUser_Name(e.target.value)}/>
                        
                        <input placeholder="Salario" type="text" value={salario} onChange={e => setSalario(e.target.value)}/>

                        
                        <input placeholder="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        
                        <input placeholder="Senha" type="password" value={senha_usuario} onChange={e => setSenhaUsuario(e.target.value)}/>
                    </div>
                        
                        <button type="submit" className="button">Cadastrar</button>

                        <Link className="back-link" to="/">
                        <Icon.LogIn size={16}  color="#4158D0"/>
                        &nbsp;Já Tenho Cadastro
                        </Link>

               </form>

              
        </div>
           
            </>
    )
        
}