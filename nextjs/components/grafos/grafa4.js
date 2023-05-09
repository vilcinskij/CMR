import styles from '../../styles/Cmr.module.css'

export default function Grafa4({ number, title }) {
    return (
        <div className={styles.grafa_border}>
            <div className={styles.grafa_title}>
                <span className={styles.grafa_number}>4</span>
                <span className={styles.grafa_description}>Place and date of taking over the goods</span> </div>
            <div className={styles.grafa4_form}>
                <label className={styles.label}>Place</label><input className={styles.input}></input>
                <label className={styles.label}>Country</label><input className={styles.input}></input>
                <label className={styles.label}>Date</label><input className={styles.input} type='date'></input>
            </div>
        </div>
    )
}

