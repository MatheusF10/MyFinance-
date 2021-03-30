import React, { useEffect } from 'react'
import { useState } from 'react'
import './Spending.scss'
import api from '../../services/api'
import { id_Usuario } from '../../services/auth'

export default function SpendingComponent() {
    const [value, setValue] = useState('')
    const [spending, setSpending] = useState('')
    const [spend, setSpend] = useState(0)
    const [spendName, setSPendName] = useState([])
    const id_user = localStorage.getItem(id_Usuario)
   
    async function handleDelete(id){
        var result = await api.delete(`/api/gastos/${id}`)
        if(result.status === 200){
            window.location.href = '/Spending'
        }
        
        
    }

    const getArray = async () => {
        const data = await api.get(`/api/gastos/${id_user}`)
        if(data.data.length!== 0){
            const dataArray = data.data
            setSPendName(dataArray.map( data => { 
                if(data.length === 0){
                    return 
                }else{
                    return( 
                        <div className="tableContainer">
                        <div className="listContainer"><li>{data.desc}:&nbsp;&nbsp;{data.spend}€</li></div>
                        <div className="buttonContainer"><button onClick={() => handleDelete(data._id)}className="deleteButton">Deletar</button></div>
                        </div>
                        )
                }
            }))
        }
    }
    useEffect(() => {
        getArray()
        getData()
    }, [])
    const getData = async () => {
        const data = await api.get(`/api/gastos/${id_user}`)
        if (data.data.length !== 0) {
            const dataValue = data.data.map(data => data.spend).reduce((next, total) => {
                return next + total
            })
            setSpend(dataValue)
        }
        
    }
    getData()
    const handleSubmit = async () => {
        const data = { id_user: id_user, desc: value, spend: spending }
        await api.post('api/gastos', data)
        setSpending('')
        setValue('')
        getArray()
    }
    return (
        <>
            <div className="mainContainer-2">
                <div className="formContainer">
                    <h1>Registre seu gastos</h1>
                    <input placeholder="Digite a Descrição do custo" type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <input placeholder="Digite o valor do gasto" type="text" value={spending} onChange={e => setSpending(e.target.value)} />

                    <button onClick={handleSubmit}>Salvar</button>


                </div>
                <div className="tableData">
                    <h1>Meus Gastos:{spend}€</h1>
                    
                    
                    
                    
                </div>
                {spendName}
            </div>
            
        </>
    )
}