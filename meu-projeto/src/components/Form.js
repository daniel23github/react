import {useState} from 'react'
 
function Form() {

    function cadastrarUsario(e) {
        e.preventDefault()
        console.log(nome)
        console.log(`Cadastrou o usuário ${nome} com a senha ${senha}`)
    }

    const [nome, setNome] = useState('Daniel')
    const [senha, setSenha] = useState()

    return (
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsario}>
                <div>
                    <label htmlFor="inome">Nome:</label>
                    <input onChange={(e) => setNome(e.target.value)} value={nome} type='text' name="nome" id="inome" placeholder='Digite o seu nome'/>
                </div>
                <div>
                    <label htmlFor="isen">Senha:</label>
                    <input onChange={(e) => setSenha(e.target.value)} type='password' name="sen" id="isen" placeholder='Digite a sua senha'/>
                </div>
                <div>
                    <input type='submit' value='cadastrar'/>
                </div>
            </form>
        </div>
    )
}

export default Form
