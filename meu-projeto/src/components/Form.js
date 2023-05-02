function Form() {

    function cadastrarUsario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuário')
    }

    return (
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsario}>
                <div>
                    <input type='text' placeholder='Digite o seu nome'/>
                </div>
                <div>
                    <input type='submit' value='cadastrar'/>
                </div>
            </form>
        </div>
    )
}

export default Form