import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Cadastrou o usuario!")
    }

    const [name, setName] = useState('Luis')
    const [password, setPassword] = useState('1234')

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)}/>                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password" id="password" name="password" placeholder="Digite a sua senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>  
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form