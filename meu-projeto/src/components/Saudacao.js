function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem!`
    }

    return <>{nome ? (<p>{gerarSaudacao(nome)}</p>) : (<p>Ainda não existe um nome</p>)}</>
}

export default Saudacao
