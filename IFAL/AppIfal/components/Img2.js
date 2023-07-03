import styles from './Img2.module.css'

function Img2(props) {
    return (
        <div>
            <p>Essa é uma imagem de {props.tipo}</p>
            <img src={props.src}/>
        </div>
    )
}

export default Img2
