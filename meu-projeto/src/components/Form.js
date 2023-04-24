import styles from './Form.module.css'
import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="iname">Nome: </label>
                    <input 
                        className={styles.form} 
                        type="text" 
                        name="name" 
                        id="iname" 
                        placeholder="Digite o seu nome: "
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="isen">Senha: </label>
                    <input 
                        className={styles.form} 
                        type="password" 
                        name="sen" 
                        id="isen" 
                        placeholder="Digite a sua senha: "
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type='submit' value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form