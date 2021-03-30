export const TOKEN_KEY = '&app-token'
export const id_Usuario = "&id-usuario"
export const NOME_USUARIO = '&nome-usuario'
export const salarioUsuario = '&salario-usuario'
export const spendsUsuario = '&salario-usuario'


export const login = token => {
    localStorage.setItem(TOKEN_KEY, token)
}
export const logout = () => {
    localStorage.clear();
}
export const setIdUsuario = id => {
    localStorage.setItem(id_Usuario, id)
}
export const getIdUsuario = () => {
    localStorage.getItem(id_Usuario)
}
export const setNomeUsuario = nome => {
    localStorage.setItem(NOME_USUARIO, nome)
}
export const getNomeUsuario = () =>  {
    localStorage.getItem(NOME_USUARIO)
}
export const setSalarioUsuario = salario => {
    localStorage.setItem(salarioUsuario, salario)
}
export const getSalarioUsuario = () => {
    localStorage.getItem(salarioUsuario)
}
export const setSpendUser = spend => {
    localStorage.setItem(spendsUsuario, spend)
}

export const getSpendUser = () => {
    localStorage.getItem(spendsUsuario)
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)