import Button from "./Button"

function Evento({numero}) {
    
    function meuEvento() {
        console.log(`Fui ativado! ${numero}`)
    }
    
    function segundoEvento() {
        console.log('Ativando o segundo Evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
