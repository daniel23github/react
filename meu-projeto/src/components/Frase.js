import styles from './Frase.module.css'

function Frase(props) {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>{props.frase}</p>
        </div>
    )
}

export default Frase
