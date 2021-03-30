import './Login.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather'
import { useState } from 'react';
import api from '../../services/api'
import {setNomeUsuario, login, setIdUsuario, setSalarioUsuario} from '../../services/auth'


export default function Login(){
    const[email, setEmail] = useState('')
    const[senha_usuario, setSenhaUsuario] = useState('')
    
    async function handleSubmit(){
        
       await api.post('/api/usuarios/login', {email, senha_usuario})
       .then(res => {
           if(res.status === 200){
                if(res.data.auth === true){
                    login(res.data.token)
                    setIdUsuario(res.data.id_client)
                    setNomeUsuario(res.data.user_name)
                    setSalarioUsuario(res.data.salario)

                    window.location.href = '/Home'
                }else if(res.data.status === 2){
                    alert('Atenção:' + res.data.error)
                }
           }else{
               alert('erro no servidor')
           }
       })
    }
    return(
        <div className="Logon-container">
            
             <section className="form">
             
                <div className="formContent">
                    <h1>MyFinance!</h1>
                    <br/>
                    <h1>Faça seu Login</h1>

                    <input type='text' placeholder ="Seu E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='password' placeholder ="Sua Senha" value={senha_usuario} onChange={e => setSenhaUsuario(e.target.value)}/>
                    <button onClick={handleSubmit} className="button">Entrar</button>

                    <Link className="back-link" to="/Cadaster">
                        <Icon.LogIn size={16}  color="#4158D0"/>
                        &nbsp;Não tenho cadastro
                    </Link>
                </div>
             </section>
        </div>
    )
}
