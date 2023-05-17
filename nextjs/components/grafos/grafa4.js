import styles from '../../styles/Cmr.module.css'
import { useState } from 'react'

export default function Grafa4({ number, title, country }) {



    const [text, setText] = useState();

    function clickHandler() {
        setText('LOOOBAS')
        console.log(text);

    }

    return (
        <div className={styles.grafa_border}>
            <div className={styles.grafa_title}>
                <span className={styles.grafa_number}>4</span>
                <span className={styles.grafa_description}>Place and date of taking over the goods</span>

                <button onClick={clickHandler}>TODAY</button>

            </div>
            <div className={styles.grafa4_form}>
                <label className={styles.label}>Place</label><input className={styles.input}></input>
                <label className={styles.label}>{text}</label>
                <input
                    className={styles.input}
                    id='load-country'
                    defaultValue={text}>


                </input>
                <label className={styles.label}>Date</label>
                <input
                    className={styles.input}
                    type='date'
                    id='load-date'>
                </input>
            </div>
        </div>
    )
}

