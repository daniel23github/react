import {useState} from 'react'


function Condicional() {

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)

    }

    function limpar() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <div>
                    <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={enviarEmail}>Enviar e-mail</button>
                    {userEmail && (
                        <div>
                            <p>O email do usuário é {userEmail}</p>
                            <button onClick={limpar}>Limpar e-mail</button>
                        </div>
                    )}
                </div>
            </form>
            
        </div>
    )
}

export default Condicional
