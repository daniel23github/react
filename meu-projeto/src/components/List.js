import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"  lancamento={1985}/>
                <Item marca="Fiat" lancamento={1964}/>
                <Item marca="Renault" />
                <Item lancamento={1999} />
            </ul>
        </>
    )
}

export default List
